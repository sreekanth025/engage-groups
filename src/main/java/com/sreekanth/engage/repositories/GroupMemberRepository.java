package com.sreekanth.engage.repositories;

import com.sreekanth.engage.models.GroupMember;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroupMemberRepository extends MongoRepository<GroupMember, String> {

    @Query("{userEmail : ?0}")
    List<GroupMember> findByUserEmail(String userEmail);
    List<GroupMember> findByGroupId(String groupId);

    @Query("{groupId : ?0, role : ?1}")
    List<GroupMember> getGroupMemberByGroupIdAndRole(String groupId, String role);

    @Query("{groupId : ?0, userEmail : ?1}")
    List<GroupMember> getGroupMemberByGroupIdAndUserEmail(String groupId, String userEmail);
}
