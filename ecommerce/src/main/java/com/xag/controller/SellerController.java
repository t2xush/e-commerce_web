package com.xag.controller;

import com.xag.model.Seller;
import com.xag.model.VerificationCode;
import com.xag.repository.VerificationCodeRepository;
import com.xag.request.LoginRequest;
import com.xag.response.ApiResponse;
import com.xag.response.AuthResponse;
import com.xag.service.AuthService;
import com.xag.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sellers")
public class SellerController {
    private final SellerService sellerService;
    private final VerificationCodeRepository verificationCodeRepository;
    private final AuthService authService;




    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginSeller(
            @RequestBody LoginRequest req ) throws Exception {
        String otp=req.getOtp();
        String email= req.getEmail();



        req.setEmail("seller_"+email);
        AuthResponse authResponse=authService.signing(req);

        return ResponseEntity.ok(authResponse);
    }

}
