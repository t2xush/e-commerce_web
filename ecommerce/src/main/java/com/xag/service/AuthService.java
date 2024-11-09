package com.xag.service;

import com.xag.response.SignupRequest;

public interface AuthService {
    String createUser(SignupRequest req);
}
