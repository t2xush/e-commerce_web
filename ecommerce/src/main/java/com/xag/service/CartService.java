package com.xag.service;

import com.xag.model.Cart;
import com.xag.model.CartItem;
import com.xag.model.Product;
import com.xag.model.User;

public interface CartService {
    public CartItem addCartItem(
            User user,
            Product product,
            String size,
            int quantity

    );
    public Cart findeUserCart(User user);
}
