package com.xag.service.impl;

import com.xag.config.JwtProvider;
import com.xag.domain.USER_ROLE;
import com.xag.model.Cart;
import com.xag.model.User;
import com.xag.repository.CartRepository;
import com.xag.repository.UserRepository;
import com.xag.response.SignupRequest;
import com.xag.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CartRepository cartRepository;
    private final JwtProvider jwtProvider;
    @Override
    public String createUser(SignupRequest req) {
        User user=userRepository.findByEmail(req.getEmail());

        if (user==null){
            User createdUser=new User();
            createdUser.setEmail(req.getEmail());
            createdUser.setFullName(req.getFullName());
            createdUser.setRole(USER_ROLE.ROLE_CUSTOMER);
            createdUser.setMobile("39357139531");
            createdUser.setPassword(passwordEncoder.encode(req.getOtp()));


            user=userRepository.save(createdUser);
            Cart cart=new Cart();
            cart.setUser(user);
            cartRepository.save(cart);
        }

        List<GrantedAuthority> authorities=new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(USER_ROLE.ROLE_CUSTOMER.toString()));
        Authentication authentication=new UsernamePasswordAuthenticationToken(req.getEmail(),null,authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);




        return jwtProvider.generateToken(authentication);
    }
}
