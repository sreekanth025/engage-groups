package com.sreekanth.engage.services;

import com.sreekanth.engage.models.*;
import com.sreekanth.engage.repositories.AssignmentRepository;
import com.sreekanth.engage.repositories.EngageGroupRepository;
import com.sreekanth.engage.repositories.GroupMemberRepository;
import com.sreekanth.engage.utils.EngageGroupUtil;
import com.sreekanth.engage.utils.EngageUserUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class GroupsService {

    private EngageGroupRepository engageGroupRepository;
    private GroupMemberRepository groupMemberRepository;
    private AssignmentRepository assignmentRepository;
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

    public ResponseEntity acceptMembership(String groupId, String adminEmail, String membershipId) {

        String originalAdmin = engageGroupUtil.getAdminMail(groupId);
        if(originalAdmin.equals(adminEmail)) {
            Optional<GroupMember> groupMemberOptional = groupMemberRepository.findById(membershipId);
            GroupMember groupMember = groupMemberOptional.get();
            groupMember.setRole("member");
            groupMemberRepository.save(groupMember);
            return new ResponseEntity("Membership allowed", HttpStatus.OK);
        }
        else {
            return new ResponseEntity("Membership can only be accepted by admin", HttpStatus.NOT_ACCEPTABLE);
        }
    }

    public ResponseEntity getGroupAssignments(String groupId, String userEmail) {

        List<GroupMember> groupMembers = groupMemberRepository
                .getGroupMemberByGroupIdAndUserEmail(groupId, userEmail);

        if(groupMembers.size() > 0) {
            List<Assignment> result = assignmentRepository.getAssignmentByGroupId(groupId);
            return new ResponseEntity(result, HttpStatus.OK);

        } else {
            return new ResponseEntity("Not a member of the group", HttpStatus.UNAUTHORIZED);
        }
    }
}
