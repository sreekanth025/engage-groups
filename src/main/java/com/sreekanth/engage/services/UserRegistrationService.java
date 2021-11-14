package com.sreekanth.engage.services;

import com.sreekanth.engage.models.EngageUser;
import com.sreekanth.engage.repositories.EngageUserRepository;
import com.sreekanth.engage.utils.EngageUserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserRegistrationService {

    @Autowired
    private EngageUserRepository engageUserRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EngageUserUtil engageUserUtil;

    public ResponseEntity registerUser(EngageUser engageUser) {

        EngageUser existing = engageUserUtil.getUserByEmail(engageUser.getUserEmail());
        if(existing != null) {
            return new ResponseEntity<>("User already exists with the given email", HttpStatus.NOT_ACCEPTABLE);
        }

        engageUser.setPassword(passwordEncoder.encode(engageUser.getPassword()));
        engageUserRepository.save(engageUser);
        return new ResponseEntity<>("Registered Successfully", HttpStatus.OK);
    }
}
