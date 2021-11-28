package com.sreekanth.engage.controllers;

import com.sreekanth.engage.models.Assignment;
import com.sreekanth.engage.models.GroupInfo;
import com.sreekanth.engage.models.GroupMember;
import com.sreekanth.engage.models.Member;
import com.sreekanth.engage.services.GroupsService;
import com.sreekanth.engage.services.MailingService;
import com.sreekanth.engage.utils.JwtTokenUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
public class GroupsController {

    private JwtTokenUtil jwtTokenUtil;
    private GroupsService groupsService;
    private MailingService mailingService;

    @PostMapping("/createGroup")
    public ResponseEntity createGroup(@RequestBody Map<String, Object> payload,
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

        return new ResponseEntity("Group created, invitation mails sent", HttpStatus.OK);
    }

    @GetMapping("/getUserGroups")
    public List<GroupInfo> getUserGroups(@RequestHeader("Authorization") String auth) {

        String token = auth.substring(7);
        String userEmail = jwtTokenUtil.getUsernameFromToken(token);

        return groupsService.getUserGroups(userEmail);
    }

    @GetMapping("/getGroupMembers/{groupId}")
    public List<Member> getGroupMembers(@PathVariable String groupId) {
        return groupsService.getGroupMembers(groupId);
    }

    @GetMapping("/joinGroup/{groupId}")
    public String joinGroup(@PathVariable String groupId,
                            @RequestHeader("Authorization") String auth) {

        String userEmail = jwtTokenUtil.getUsernameFromToken(auth.substring(7));
        return groupsService.joinGroup(userEmail, groupId);
    }

    @PostMapping("/acceptMembership")
    public ResponseEntity acceptMembership(@RequestBody Map<String, Object> payload,
                                           @RequestHeader("Authorization") String auth) {

        String adminEmail = jwtTokenUtil.getUsernameFromToken(auth.substring(7));
        String groupId = (String) payload.get("groupId");
        String membershipId = (String) payload.get(("membershipId"));
        return groupsService.acceptMembership(groupId, adminEmail, membershipId);
    }

    @GetMapping("/getGroupAssignments/{groupId}")
    public ResponseEntity getGroupAssignments(@PathVariable String groupId,
                                                @RequestHeader("Authorization") String auth) {
        String userEmail = jwtTokenUtil.getUsernameFromToken(auth.substring(7));
        return groupsService.getGroupAssignments(groupId, userEmail);
    }
}
