package com.sreekanth.engage.controllers;

import com.sreekanth.engage.models.Submission;
import com.sreekanth.engage.services.MailingService;
import com.sreekanth.engage.services.SubmissionService;
import com.sreekanth.engage.utils.JwtTokenUtil;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
public class SubmissionController {

    private JwtTokenUtil jwtTokenUtil;
    private SubmissionService submissionService;
    private MailingService mailingService;

    @PostMapping("/submitAssignment")
    public String submitAssignment(@RequestBody Map<String, Object> payload,
                                   @RequestHeader("Authorization") String auth) {
        String token = auth.substring(7);
        String userEmail = jwtTokenUtil.getUsernameFromToken(token);

        String assignmentId = (String) payload.get("assignmentId");
        List<String> fileLinks = (List<String>) payload.get("fileLinks");
        return submissionService.submitAssignment(assignmentId, userEmail, fileLinks);
    }

    @PostMapping("/submitFeedback")
    public String submitFeedback(@RequestBody Map<String, Object> payload,
                                 @RequestHeader("Authorization") String auth) {

        String userEmail = jwtTokenUtil.getUsernameFromToken(auth.substring(7));
        String submissionId = (String) payload.get("submissionId");
        String feedback = (String) payload.get("feedback");

        Submission submission = submissionService.submitFeedback(submissionId, feedback);
        mailingService.sendFeedbackMail(userEmail, submission);
        return submission.getId();
    }

    @GetMapping("/getSubmission/{submissionId}")
    public Submission getSubmission(@PathVariable String submissionId) {
        return submissionService.getSubmission(submissionId);
    }
}
