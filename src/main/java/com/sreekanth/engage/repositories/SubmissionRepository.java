package com.sreekanth.engage.repositories;

import com.sreekanth.engage.models.Submission;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubmissionRepository extends MongoRepository<Submission, String> {
    List<Submission> findAllByAssignmentId(String assignmentId);
}
