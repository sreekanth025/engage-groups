package com.sreekanth.engage.repositories;

import com.sreekanth.engage.models.GroupMember;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupMemberRepository extends MongoRepository<GroupMember, String> {
}
