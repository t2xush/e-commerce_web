package com.xag.service;

import com.stripe.exception.StripeException;
import com.xag.model.Order;
import com.xag.model.PaymentOrder;
import com.xag.model.User;

import java.util.Set;

public interface PaymentService {
    PaymentOrder createOrder(User user, Set<Order> orders);
    PaymentOrder getPaymentOrderById(Long orderId) throws Exception;
    PaymentOrder getPaymentOrderByPaymentId(String orderId) throws Exception;
    Boolean ProceedPaymentOrder(PaymentOrder paymentOrder,
                                String paymentId,
                                String paymentLinkId) throws Exception;
    String createStripePaymentLink(User user,
                                   Long amount,Long orderId) throws StripeException;
}
