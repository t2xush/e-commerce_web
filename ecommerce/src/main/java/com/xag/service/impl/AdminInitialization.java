package com.xag.service.impl;


import com.xag.domain.USER_ROLE;
import com.xag.model.User;
import com.xag.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AdminInitialization implements CommandLineRunner {
    private  final UserRepository userRepository;
    private  final PasswordEncoder passwordEncoder;


    public void run(String...args){
        initializeAdminUser();
    }

    private void initializeAdminUser(){
        String adminUsername="alex.sjx53@gmail.com";

        if (userRepository.findByEmail(adminUsername)==null){
            User adminUser=new User();
            adminUser.setPassword(passwordEncoder.encode("ecommercesj"));
            adminUser.setFullName("alex");
            adminUser.setEmail(adminUsername);
            adminUser.setRole(USER_ROLE.ROLE_ADMIN);

            userRepository.save(adminUser);
        }
    }

}
