package com.sreekanth.engage.utils;

import com.sreekanth.engage.models.EngageGroup;
import com.sreekanth.engage.models.GroupMember;
import com.sreekanth.engage.repositories.EngageGroupRepository;
import com.sreekanth.engage.repositories.GroupMemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@AllArgsConstructor
public class EngageGroupUtil {

    private EngageGroupRepository engageGroupRepository;
    private GroupMemberRepository groupMemberRepository;

    public String getGroupName(String groupId) {
        Optional<EngageGroup> searchResult = engageGroupRepository.findById(groupId);
        return searchResult.get().getGroupName();
    }

    public String getAdminMail(String groupId) {
        List<GroupMember> searchList = groupMemberRepository.getGroupMemberByGroupIdAndRole(groupId, "admin");
        GroupMember adminMember = searchList.get(0);
        return adminMember.getUserEmail();
    }
}
