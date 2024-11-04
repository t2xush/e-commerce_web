package com.xag.controller;

import com.xag.response.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping
    public ApiResponse HomeControllerHandler(){
        ApiResponse apiResponse=new ApiResponse();
        apiResponse.setMessage("welcome to xag-ecommerce,works?");
        return apiResponse;
    }
}
