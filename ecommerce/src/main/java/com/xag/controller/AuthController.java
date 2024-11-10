package com.xag.controller;

import com.xag.domain.USER_ROLE;
import com.xag.model.VerificationCode;
import com.xag.request.LoginRequest;
import com.xag.response.ApiResponse;
import com.xag.response.AuthResponse;
import com.xag.repository.UserRepository;
import com.xag.response.SignupRequest;
import com.xag.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final AuthService authService;
    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody SignupRequest req) throws Exception {
//        User user=new User();
//        user.setEmail(req.getEmail());
//        user.setFullName(req.getFullName());
//
//        User savedUser=userRepository.save(user);

        String jwt=authService.createUser(req);

        AuthResponse res=new AuthResponse();
        res.setJwt(jwt);
        res.setMessage("register success");
        res.setRole(USER_ROLE.ROLE_CUSTOMER);

        return ResponseEntity.ok(res);
    }

    @PostMapping("/sent/login-signup-otp")
    public ResponseEntity<ApiResponse> sentOtpHandler(
            @RequestBody VerificationCode req) throws Exception {
//        User user=new User();
//        user.setEmail(req.getEmail());
//        user.setFullName(req.getFullName());
//
//        User savedUser=userRepository.save(user);

        authService.sentLoginOtp(req.getEmail());
       ApiResponse res=new ApiResponse();
        res.setMessage("otp sent successfully");
        return ResponseEntity.ok(res);
    }



    @PostMapping("/signing")
    public ResponseEntity<AuthResponse> loginHandler(
            @RequestBody LoginRequest req) throws Exception {
        AuthResponse authResponse=authService.signing(req);
        return ResponseEntity.ok(authResponse);


    }
}
