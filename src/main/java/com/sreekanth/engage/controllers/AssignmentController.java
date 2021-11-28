package com.sreekanth.engage.controllers;

import com.sreekanth.engage.models.AdminAssignmentView;
import com.sreekanth.engage.models.Assignment;
import com.sreekanth.engage.models.MetaSubmission;
import com.sreekanth.engage.services.AssignmentService;
import com.sreekanth.engage.utils.JwtTokenUtil;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

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
        String dueDate = (String) payload.get("dueDate");
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

    @GetMapping("/studentOpenAssignment/{assignmentId}")
    public Assignment studentOpenAssignment(@PathVariable String assignmentId) {
        return assignmentService.getAssignmentById(assignmentId);
    }

    @GetMapping("/adminOpenAssignment/{assignmentId}")
    public AdminAssignmentView adminOpenAssignment(@PathVariable String assignmentId) {
        List<MetaSubmission> submissions = assignmentService.getAssignmentSubmissions(assignmentId);
        Assignment assignment = assignmentService.getAssignmentById(assignmentId);
        return new AdminAssignmentView(assignment, submissions);
    }
}
