package com.xag.repository;

import com.xag.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart,Long> {

    Cart findByUserId(Long id);

}
