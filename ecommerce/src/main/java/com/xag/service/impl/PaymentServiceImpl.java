package com.xag.service.impl;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import com.xag.domain.PaymentOrderStatus;
import com.xag.domain.PaymentStatus;
import com.xag.model.Order;
import com.xag.model.PaymentOrder;
import com.xag.model.User;
import com.xag.repository.OrderRepository;
import com.xag.repository.PaymentOrderRepository;
import com.xag.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
    private final PaymentOrderRepository paymentOrderRepository;
    private final OrderRepository orderRepository;

//    private String stripeSecretKey="stripesecretkey";

    @Value("${stripe.api.key}")
    private String stripeSecretKey;

    @Override
    public PaymentOrder createOrder(User user, Set<Order> orders) {
        Long amount=orders.stream().mapToLong(Order::getTotalSellingPrice).sum();
        PaymentOrder paymentOrder=new PaymentOrder();
        paymentOrder.setAmount(amount);
        paymentOrder.setUser(user);
        paymentOrder.setOrders(orders);

        return paymentOrderRepository.save(paymentOrder);
    }

    @Override
    public PaymentOrder getPaymentOrderById(Long orderId) throws Exception {

        return paymentOrderRepository.findById(orderId).orElseThrow(()->
                new Exception("payment order not found"));
    }

    @Override
    public PaymentOrder getPaymentOrderByPaymentId(String orderId) throws Exception {
        PaymentOrder paymentOrder=paymentOrderRepository.findByPaymentLinkId(orderId);
        if (paymentOrder==null){
            throw new Exception("payment order not found with provided payment link id");
        }
        return paymentOrder;
    }

    @Override
    public Boolean ProceedPaymentOrder(PaymentOrder paymentOrder,
                                       String paymentId,
                                       String paymentLinkId) throws Exception {
        if (paymentOrder.getStatus().equals(PaymentOrderStatus.PENDING)) {

            try {
                Stripe.apiKey = stripeSecretKey;

                PaymentIntent paymentIntent = PaymentIntent.retrieve(paymentId);
                String status = paymentIntent.getStatus();

                if ("succeeded".equals(status)) {
                    Set<Order> orders = paymentOrder.getOrders();
                    for (Order order : orders) {
                        order.setPaymentStatus(PaymentStatus.COMPLETED);
                        orderRepository.save(order);
                    }
                    paymentOrder.setStatus(PaymentOrderStatus.SUCCESS);
                    paymentOrderRepository.save(paymentOrder);
                    return true;
                }
                paymentOrder.setStatus(PaymentOrderStatus.FAILED);
                paymentOrderRepository.save(paymentOrder);
                return false;
            }catch (StripeException e){
                throw new Exception("Stripe payment processing failed"+e.getMessage(),e);

            }
        }
        return false;
    }

    @Override
    public String createStripePaymentLink(User user, Long amount, Long orderId) throws StripeException {
        Stripe.apiKey=stripeSecretKey;
        SessionCreateParams params=SessionCreateParams.builder()
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:3000/payment-success/"+orderId)
                .setCancelUrl("http://localhost:3000/payment-cancel/")
                .addLineItem(SessionCreateParams.LineItem.builder()
                        .setQuantity(1L)
                        .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("EUR")
                                .setUnitAmount(amount*100)
                                .setProductData(
                                        SessionCreateParams
                                                .LineItem.PriceData.ProductData
                                                .builder().setName("xag payment")
                                                .build()
                                ).build()
                        ).build()
                ).build();

        Session session=Session.create(params);

        return session.getCancelUrl();
    }
}
