package com.sreekanth.engage.repositories;

import com.sreekanth.engage.models.EngageUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EngageUserRepository extends MongoRepository<EngageUser, String> {
    public List<EngageUser> findByUserEmail(String userEmail);
}
