package com.sreekanth.engage.utils;

import com.sreekanth.engage.models.EngageUser;
import com.sreekanth.engage.repositories.EngageUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class EngageUserUtil {

    @Autowired
    private EngageUserRepository engageUserRepository;

    public EngageUser getUserByEmail(String userEmail) {
        List<EngageUser> users = engageUserRepository.findByUserEmail(userEmail);
        if(users.size() == 0) return null;
        return users.get(0);
    }
}
