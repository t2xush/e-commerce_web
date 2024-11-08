package com.xag.controller;

import com.xag.model.User;
import com.xag.repository.UserRepository;
import com.xag.response.SignupRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    @PostMapping("/signup")
    public ResponseEntity<User> createUserHandler(@RequestBody SignupRequest req){
        User user=new User();
        user.setEmail(req.getEmail());
        user.setFullName(req.getFullName());

        User savedUser=userRepository.save(user);

        return ResponseEntity.ok(savedUser);
    }
}
