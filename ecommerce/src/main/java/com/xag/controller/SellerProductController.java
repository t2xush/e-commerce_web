package com.xag.controller;


import com.xag.exception.ProductException;
import com.xag.model.Product;
import com.xag.model.Seller;
import com.xag.request.CreateProductRequest;
import com.xag.service.ProductService;
import com.xag.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/seller/products")
public class SellerProductController {
    private final ProductService productService;
    private final SellerService sellerService;


    @GetMapping()
    public ResponseEntity<List<Product>> getProductBySellerId(
            @RequestHeader("Authorization") String jwt) throws Exception {
        Seller seller=sellerService.getSellerProfile(jwt);

        List<Product> products=productService.getProductBySellerId(seller.getId());
        return new ResponseEntity<>(products, HttpStatus.OK);
    }


    @PostMapping()
    public ResponseEntity<Product> createProduct(
            @RequestBody CreateProductRequest request,

            @RequestHeader("Authorization") String jwt)
        throws Exception{

        Seller seller=sellerService.getSellerProfile(jwt);
        Product product=productService.createProduct(request,seller);


        return new ResponseEntity<>(product,HttpStatus.CREATED);
    }


    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long productId){
        try {
            productService.deleteProduct(productId);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (ProductException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }




    @PutMapping("/{productId}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long productId,
                                                 @RequestBody Product product){
        try {
            Product updateProduct = productService.updateProduct(productId,product);
            return new ResponseEntity<>(updateProduct,HttpStatus.OK);
        }catch (ProductException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
