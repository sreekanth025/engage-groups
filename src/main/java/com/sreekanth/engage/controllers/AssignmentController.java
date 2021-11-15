package com.sreekanth.engage.controllers;

import com.sreekanth.engage.services.AssignmentService;
import com.sreekanth.engage.utils.JwtTokenUtil;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
public class AssignmentController {

    private JwtTokenUtil jwtTokenUtil;
    private AssignmentService assignmentService;

    @PostMapping("/createAssignment")
    public String createAssignment(@RequestBody Map<String, Object> payload,
                                   @RequestHeader("Authorization") String auth) {

        String token = auth.substring(7);
        String adminEmail = jwtTokenUtil.getUsernameFromToken(token);

        String groupId = (String) payload.get("groupId");
        String title = (String) payload.get("title");
        String instructions = (String) payload.get("instructions");
        Date dueDate = (Date) payload.get("dueDate");
        List<String> fileLinks = (List<String>) payload.get("fileLinks");
        Integer points = Integer.valueOf((String) payload.get("points"));

        return assignmentService.createAssignment(
                adminEmail,
                groupId,
                title,
                instructions,
                dueDate,
                fileLinks,
                points
        );

    }
}
