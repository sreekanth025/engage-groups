package com.sreekanth.engage.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Member {

    private String id;
    private String groupId;
    private String userEmail;
    private String name;
    private String role;

    public Member(GroupMember groupMember, String name) {
        this.id = groupMember.getId();
        this.groupId = groupMember.getGroupId();
        this.userEmail = groupMember.getUserEmail();
        this.name = name;
        this.role = groupMember.getRole();
    }
}
