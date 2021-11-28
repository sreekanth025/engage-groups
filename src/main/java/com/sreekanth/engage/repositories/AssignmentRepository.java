package com.sreekanth.engage.repositories;

import com.sreekanth.engage.models.Assignment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface AssignmentRepository extends MongoRepository<Assignment, String> {
    Optional<Assignment> findById(String id);
    List<Assignment> getAssignmentByGroupId(String groupId);
}

// TODO : Saving due date for the assignment object
