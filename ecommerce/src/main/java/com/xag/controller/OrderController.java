package com.xag.controller;

import com.xag.domain.PaymentMethod;
import com.xag.model.*;
import com.xag.response.PaymentLinkResponse;
import com.xag.service.CartService;
import com.xag.service.OrderService;
import com.xag.service.SellerService;
import com.xag.service.UserService;
import com.xag.service.SellerReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;
    private final UserService userService;
    private final CartService cartService;
    private final SellerService sellerService;
    private final SellerReportService sellerReportService;

    @PostMapping()
    public ResponseEntity<PaymentLinkResponse> createOrderHandler(
            @RequestBody Address shippingAddress,
            @RequestParam PaymentMethod paymentMethod,
            @RequestHeader("Authorization") String jwt)
            throws Exception{
        User user=userService.findUserByJwtToken(jwt);
        Cart cart=cartService.findeUserCart(user);
        Set<Order> orders=orderService.createOrder(user,shippingAddress,cart);

       PaymentLinkResponse res=new PaymentLinkResponse();
       return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<List<Order>> usersOrderHistoryHandler(
            @RequestHeader("Authorization")
            String jwt) throws Exception {
        User user=userService.findUserByJwtToken(jwt);
        List<Order> orders=orderService.userOrderHistory(user.getId());
        return new ResponseEntity<>(orders,HttpStatus.ACCEPTED);
    }


    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrderById(
            @PathVariable Long orderId,
            @RequestHeader("Authorization") String jwt) throws Exception {
        User user=userService.findUserByJwtToken(jwt);
        Order orders=orderService.findOrderById(orderId);
        return new ResponseEntity<>(orders,HttpStatus.ACCEPTED);

    }

    @GetMapping("/item/{orderItemId}")
    public ResponseEntity<OrderItem> getOrderItemById(
            @PathVariable Long oerderItemId,
            @RequestHeader("Authorization")String jwt) throws Exception {
        User user=userService.findUserByJwtToken(jwt);
        OrderItem orderItem=orderService.getOrderItemById(oerderItemId);
        return new ResponseEntity<>(orderItem,HttpStatus.ACCEPTED);

    }

    @PutMapping("/{orderId}/cancel")
    public ResponseEntity<Order> cancelOrder(
            @PathVariable Long orderId,
            @RequestHeader("Authorization") String jwt) throws Exception{
        User user=userService.findUserByJwtToken(jwt);
        Order order=orderService.cancelOrder(orderId,user);

        Seller seller=sellerService.getSellerById(order.getSellerId());
        SellerReport report=sellerReportService.getSellerReport(seller);

        report.setCanceledOrders(report.getCanceledOrders()+1);
        report.setTotalRefunds((long) (report.getTotalRefunds()+order.getTotalSellingPrice()));
        sellerReportService.updateSellerReport(report);

        return ResponseEntity.ok(order);
    }





}


