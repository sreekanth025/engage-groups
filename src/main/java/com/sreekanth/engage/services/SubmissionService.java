package com.sreekanth.engage.services;

import com.sreekanth.engage.models.Submission;
import com.sreekanth.engage.repositories.SubmissionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

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
}