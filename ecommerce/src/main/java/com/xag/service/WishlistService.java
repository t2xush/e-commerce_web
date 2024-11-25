package com.xag.service;

import com.xag.model.Product;
import com.xag.model.User;
import com.xag.model.Wishlist;
import com.xag.repository.WishlistRepository;

public interface WishlistService {
    Wishlist createWishlist(User user);
    Wishlist getWishlistByUserId(User user);
    Wishlist addProductToWishlist(User user, Product product);
}
