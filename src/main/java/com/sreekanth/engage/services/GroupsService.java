package com.sreekanth.engage.services;

import com.sreekanth.engage.models.EngageGroup;
import com.sreekanth.engage.models.GroupMember;
import com.sreekanth.engage.repositories.EngageGroupRepository;
import com.sreekanth.engage.repositories.GroupMemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@AllArgsConstructor
public class GroupsService {

    private EngageGroupRepository engageGroupRepository;
    private GroupMemberRepository groupMemberRepository;

    public String createGroup(String groupName, String adminEmail) {
        EngageGroup engageGroup = new EngageGroup(groupName, new Date());
        EngageGroup createdGroup = engageGroupRepository.save(engageGroup);
        groupMemberRepository.save(new GroupMember(createdGroup.getId(), adminEmail, "admin"));
        return createdGroup.getId();
    }
}
