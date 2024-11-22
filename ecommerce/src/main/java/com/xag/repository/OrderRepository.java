package com.xag.repository;

import com.xag.model.Order;
import com.xag.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Long> {
    List<Order> findByUserId(Long userId);
    List<Order> findBySellerId(Long sellerId);


}
