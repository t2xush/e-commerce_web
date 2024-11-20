package com.xag.service;

import com.xag.domain.USER_ROLE;
import com.xag.request.LoginRequest;
import com.xag.response.AuthResponse;
import com.xag.request.SignupRequest;

public interface AuthService {
    void sentLoginOtp(String email, USER_ROLE role) throws Exception;
    String createUser(SignupRequest req) throws Exception;
    AuthResponse signing(LoginRequest req) throws Exception;
}
