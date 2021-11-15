package com.sreekanth.engage.repositories;

import com.sreekanth.engage.models.Submission;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubmissionRepository extends MongoRepository<Submission, String> {
}
