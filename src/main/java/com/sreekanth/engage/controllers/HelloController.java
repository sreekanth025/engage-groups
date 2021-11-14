package com.sreekanth.engage.controllers;

import com.sreekanth.engage.config.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @RequestMapping("/hello")
    public String sayHello(@RequestHeader("Authorization") String auth) {
        String token = auth.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        System.out.println(username);

        return "Hello Engage";
    }
}
