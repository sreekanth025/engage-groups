package com.sreekanth.engage.services;

import com.sreekanth.engage.models.Assignment;
import com.sreekanth.engage.repositories.AssignmentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class AssignmentService {

    private AssignmentRepository assignmentRepository;

    public String createAssignment(
            String postedBy,
            String groupId,
            String title,
            String instructions,
            Date dueDate,
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
}
