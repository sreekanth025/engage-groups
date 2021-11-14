package com.sreekanth.engage.controllers;

import com.sreekanth.engage.models.EngageUser;
import com.sreekanth.engage.repositories.EngageUserRepository;
import com.sreekanth.engage.services.UserRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserRegistrationController {

    @Autowired
    private UserRegistrationService userRegistrationService;

    @PostMapping("/register")
    public ResponseEntity createTodo(@RequestBody EngageUser engageUser) {
        return userRegistrationService.registerUser(engageUser);
    }
}
