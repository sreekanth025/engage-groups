package com.sreekanth.engage.controllers;

import com.sreekanth.engage.services.SubmissionService;
import com.sreekanth.engage.utils.JwtTokenUtil;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
public class SubmissionController {

    private JwtTokenUtil jwtTokenUtil;
    private SubmissionService submissionService;

    @PostMapping("/submitAssignment")
    public String submitAssignment(@RequestBody Map<String, Object> payload,
                                   @RequestHeader("Authorization") String auth) {
        String token = auth.substring(7);
        String userEmail = jwtTokenUtil.getUsernameFromToken(token);

        String assignmentId = (String) payload.get("assignmentId");
        List<String> fileLinks = (List<String>) payload.get("fileLinks");
        return submissionService.submitAssignment(assignmentId, userEmail, fileLinks);
    }
}
