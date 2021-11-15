package com.sreekanth.engage.models;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GroupInfo {

    private String groupId;
    private String groupName;
    private String adminName;
    private String adminMail;
    private String userEmail;
}
