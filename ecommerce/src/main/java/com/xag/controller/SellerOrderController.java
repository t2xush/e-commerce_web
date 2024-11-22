package com.xag.controller;


import com.xag.domain.OrderStatus;
import com.xag.model.Order;
import com.xag.model.Seller;
import com.xag.service.OrderService;
import com.xag.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/seller/orders")
public class SellerOrderController {
    private final OrderService orderService;
    private final SellerService sellerService;


    @GetMapping()
    public ResponseEntity<List<Order>> getAllOrdersHandler(
            @RequestHeader("Authorization") String jwt) throws Exception {
        Seller seller=sellerService.getSellerProfile(jwt);
        List<Order> orders=orderService.sellerOrder(seller.getId());

        return new ResponseEntity<>(orders, HttpStatus.ACCEPTED);
    }

    @PatchMapping("/{orderId}/status/{orderStatus}")
    public ResponseEntity<Order> updateOrderHandler(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long orderId,
            @PathVariable OrderStatus orderStatus) throws Exception {
        Order order=orderService.updateOrderStatus(orderId,orderStatus);
        return new ResponseEntity<>(order,HttpStatus.ACCEPTED);

    }

}
