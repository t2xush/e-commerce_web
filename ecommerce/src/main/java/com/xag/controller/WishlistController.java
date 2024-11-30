package com.xag.controller;

import com.xag.exception.ProductException;
import com.xag.model.Product;
import com.xag.model.User;
import com.xag.model.Wishlist;
import com.xag.service.ProductService;
import com.xag.service.UserService;
import com.xag.service.WishlistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {
    private final WishlistService wishlistService;
    private final UserService userService;
    private final ProductService productService;

    @GetMapping()
    public ResponseEntity<Wishlist> getWishlistByUserId(
            @RequestHeader("Authorization")String jwt) throws Exception {
        User user=userService.findUserByJwtToken(jwt);
        Wishlist wishlist=wishlistService.getWishlistByUserId(user);
        return ResponseEntity.ok(wishlist);
    }



    @PostMapping("/add-product/{productId}")
    public ResponseEntity<Wishlist> addProductToWishlist(
        @PathVariable Long productId,
        @RequestHeader("Authorization") String jwt) throws Exception {
    Product product=productService.findProductById(productId);
    User user=userService.findUserByJwtToken(jwt);
    Wishlist updateWishlist=wishlistService.addProductToWishlist(
            user,
            product
    );
    return ResponseEntity.ok(updateWishlist);
}

}
