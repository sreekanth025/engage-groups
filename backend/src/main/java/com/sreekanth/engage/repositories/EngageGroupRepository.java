package com.sreekanth.engage.repositories;

import com.sreekanth.engage.models.EngageGroup;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EngageGroupRepository extends MongoRepository<EngageGroup, String> {
}
