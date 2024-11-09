package com.xag.controller;

import com.xag.domain.USER_ROLE;
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
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody SignupRequest req){
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
}
