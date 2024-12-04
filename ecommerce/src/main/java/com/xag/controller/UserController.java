package com.xag.controller;

import com.xag.model.User;
import com.xag.model.VerificationCode;
import com.xag.response.ApiResponse;
import com.xag.response.AuthResponse;
import com.xag.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/api/users/profile")
    public ResponseEntity<User> sentOtpHandler(
            @RequestHeader("Authorization") String jwt)
        throws Exception{
        User user=userService.findUserByJwtToken(jwt);
        return ResponseEntity.ok(user);
    }

}
