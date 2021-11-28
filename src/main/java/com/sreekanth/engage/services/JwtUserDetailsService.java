package com.sreekanth.engage.services;

import java.util.ArrayList;

import com.sreekanth.engage.models.EngageUser;
import com.sreekanth.engage.utils.EngageUserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private EngageUserUtil engageUserUtil;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        EngageUser engageUser = engageUserUtil.getUserByEmail(username);
        if(engageUser != null) {
            return new User(engageUser.getUserEmail(), engageUser.getPassword(), new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }
}