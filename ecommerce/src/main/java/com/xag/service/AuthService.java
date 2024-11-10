package com.xag.service;

import com.xag.request.LoginRequest;
import com.xag.response.AuthResponse;
import com.xag.response.SignupRequest;

public interface AuthService {
    void sentLoginOtp(String email) throws Exception;
    String createUser(SignupRequest req) throws Exception;
    AuthResponse signing(LoginRequest req);
}
