package com.sreekanth.engage.services;

import com.sreekanth.engage.models.Submission;
import com.sreekanth.engage.repositories.SubmissionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SubmissionService {

    private SubmissionRepository submissionRepository;

//    TODO : submission time not getting stored in the database
    public String submitAssignment(String assignmentId, String userEmail, List<String> fileLinks) {
        Submission submission = submissionRepository.save(
                new Submission(
                        null,
                        assignmentId,
                        userEmail,
                        "submitted",
                        new Date(),
                        fileLinks,
                        null,
                        null
                )
        );
        return submission.getId();
    }

    public Submission submitFeedback(String submissionId, String feedback, Integer points) {
        Optional<Submission> OptionalSubmission = submissionRepository.findById(submissionId);
        Submission submission = OptionalSubmission.get();
        submission.setFeedback(feedback);
        submission.setPointsReceived(points);
        submissionRepository.save(submission);
        return submission;
    }

    public Submission getSubmission(String submissionId) {
        Optional<Submission> searchResult = submissionRepository.findById(submissionId);
        return searchResult.get();
    }
}