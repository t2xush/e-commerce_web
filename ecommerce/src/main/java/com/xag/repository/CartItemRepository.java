package com.xag.repository;

import com.xag.model.Cart;
import com.xag.model.CartItem;
import com.xag.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem,Long> {

    CartItem findByCartAndProductAndSize(Cart cart, Product product,String size);
}
