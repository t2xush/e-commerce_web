package com.xag.service;

import com.xag.model.User;

public interface UserService {

    User findUserByJwtToken(String jwt) throws Exception;
     User findUserByEmail(String email) throws Exception;
}
