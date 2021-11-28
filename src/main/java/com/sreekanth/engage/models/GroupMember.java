package com.sreekanth.engage.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "group_members")
public class GroupMember {

    @Id
    private String id;
    private String groupId;
    private String userEmail;
    private String role;

    public GroupMember(String groupId, String userEmail, String role) {
        this.groupId = groupId;
        this.userEmail = userEmail;
        this.role = role;
    }
}
