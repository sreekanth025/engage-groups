package com.sreekanth.engage.services;

import com.sreekanth.engage.models.Assignment;
import com.sreekanth.engage.models.MetaSubmission;
import com.sreekanth.engage.models.Submission;
import com.sreekanth.engage.repositories.AssignmentRepository;
import com.sreekanth.engage.repositories.SubmissionRepository;
import com.sreekanth.engage.utils.EngageUserUtil;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class AssignmentService {

    private AssignmentRepository assignmentRepository;
    private SubmissionRepository submissionRepository;
    private EngageUserUtil engageUserUtil;

    public String createAssignment(
            String postedBy,
            String groupId,
            String title,
            String instructions,
            String dueDate,
            List<String> fileLinks,
            Integer points
    ) {

        Assignment assignment = assignmentRepository.save(
                new Assignment(null, postedBy, groupId, title, instructions, dueDate, fileLinks, points)
        );
        return assignment.getId();
    }

    public Assignment getAssignmentById(String assignmentId) {
        return assignmentRepository.findById(assignmentId).get();
    }

    public List<MetaSubmission> getAssignmentSubmissions(String assignmentId) {

        List<Submission> submissions = submissionRepository.findAllByAssignmentId(assignmentId);
        List<MetaSubmission> result = new ArrayList<>();

        for(Submission submission : submissions) {
            MetaSubmission metaSubmission = new MetaSubmission(
                    submission.getId(),
                    submission.getUserEmail(),
                    engageUserUtil.getNameByUserEmail(submission.getUserEmail()),
                    submission.getStatus(),
                    submission.getPointsReceived()
            );
            result.add(metaSubmission);
        }

        return result;
    }
}
