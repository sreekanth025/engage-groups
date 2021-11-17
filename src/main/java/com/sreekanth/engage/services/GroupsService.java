package com.sreekanth.engage.services;

import com.sreekanth.engage.models.EngageGroup;
import com.sreekanth.engage.models.GroupInfo;
import com.sreekanth.engage.models.GroupMember;
import com.sreekanth.engage.models.Member;
import com.sreekanth.engage.repositories.EngageGroupRepository;
import com.sreekanth.engage.repositories.GroupMemberRepository;
import com.sreekanth.engage.utils.EngageGroupUtil;
import com.sreekanth.engage.utils.EngageUserUtil;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class GroupsService {

    private EngageGroupRepository engageGroupRepository;
    private GroupMemberRepository groupMemberRepository;
    private EngageGroupUtil engageGroupUtil;
    private EngageUserUtil engageUserUtil;
    private MailingService mailingService;

    public String createGroup(String groupName, String adminEmail) {
        EngageGroup engageGroup = new EngageGroup(groupName, new Date());
        EngageGroup createdGroup = engageGroupRepository.save(engageGroup);
        groupMemberRepository.save(new GroupMember(createdGroup.getId(), adminEmail, "admin"));
        return createdGroup.getId();
    }

    public List<GroupInfo> getUserGroups(String userEmail) {

        List<GroupMember> groupMembers = groupMemberRepository.findByUserEmail(userEmail);
        List<GroupInfo> result = new ArrayList<>();

        for(GroupMember groupMember: groupMembers) {

            String groupName = engageGroupUtil.getGroupName(groupMember.getGroupId());
            String adminMail = engageGroupUtil.getAdminMail(groupMember.getGroupId());
            String adminName = engageUserUtil.getNameByUserEmail(adminMail);

            GroupInfo groupInfo = new GroupInfo(
                    groupMember.getGroupId(),
                    groupName,
                    adminName,
                    groupMember.getUserEmail(),
                    userEmail
            );
            result.add(groupInfo);
        }

        return result;
    }

    public List<Member> getGroupMembers(String groupId) {
        List<GroupMember> searchResult = groupMemberRepository.findByGroupId(groupId);
        List<Member> result = new ArrayList<>();

        for(GroupMember groupMember: searchResult) {
            String name = engageUserUtil.getNameByUserEmail(groupMember.getUserEmail());
            result.add(new Member(groupMember, name));
        }

        return result;
    }

    public String joinGroup(String userEmail, String groupId) {
        GroupMember groupMember = new GroupMember(groupId, userEmail, "waiting");
        groupMember = groupMemberRepository.save(groupMember);
        mailingService.groupJoiningNotification();
        return groupMember.getId();
    }
}
