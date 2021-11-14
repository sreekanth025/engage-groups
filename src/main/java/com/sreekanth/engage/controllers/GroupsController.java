package com.sreekanth.engage.controllers;

import com.sreekanth.engage.services.GroupsService;
import com.sreekanth.engage.services.MailingService;
import com.sreekanth.engage.utils.JwtTokenUtil;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
public class GroupsController {

    private JwtTokenUtil jwtTokenUtil;
    private GroupsService groupsService;
    private MailingService mailingService;

    @PostMapping("/createGroup")
    public String createGroup(@RequestBody Map<String, Object> payload,
                              @RequestHeader("Authorization") String auth) {

        String token = auth.substring(7);
        String userEmail = jwtTokenUtil.getUsernameFromToken(token);

        String groupName = (String) payload.get("groupName");
        List<String> emailList = (List<String>) payload.get("emails");

        String groupId = groupsService.createGroup(groupName, userEmail);
        mailingService.sendGroupInvitationMail(userEmail, groupId, emailList);

        System.out.println(userEmail);
        System.out.println(groupName);
        System.out.println(emailList);
        System.out.println(groupId);

        return "Still under development";
    }
}
