package com.sreekanth.engage.repositories;

import com.sreekanth.engage.models.Assignment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AssignmentRepository extends MongoRepository<Assignment, String> {
}
