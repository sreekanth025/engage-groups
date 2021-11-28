package com.sreekanth.engage.controllers;

import com.sreekanth.engage.utils.EngageUserUtil;
import com.sreekanth.engage.utils.JwtTokenUtil;
import com.sreekanth.engage.models.EngageUser;
import com.sreekanth.engage.repositories.EngageUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HelloController {

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private EngageUserRepository engageUserRepository;

    @Autowired
    private EngageUserUtil engageUserUtil;

    @RequestMapping("/hello")
    public String sayHello(@RequestHeader("Authorization") String auth) {
        String token = auth.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        System.out.println(username);

        return "Hello Engage";
    }

    @GetMapping("/users")
    public List<EngageUser> getUsers() {
        List<EngageUser> users = engageUserRepository.findAll();
        return users;
    }
}
