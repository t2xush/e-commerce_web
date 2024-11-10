package com.xag.service.impl;

import com.xag.config.JwtProvider;
import com.xag.model.User;
import com.xag.repository.UserRepository;
import com.xag.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;
    @Override
    public User findUserByJwtToken(String jwt) throws Exception {
        String email=jwtProvider.getEmailFromJwtToken(jwt);

        User user=this.findUserByEmail(email);
//        if (user==null){
//            throw new Exception("User not found with email - " +email);
//        }

        return user;
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user=userRepository.findByEmail(email);
        if (user==null){
            throw new Exception("user not found with email - "+email);
        }
        return user;
    }
}
