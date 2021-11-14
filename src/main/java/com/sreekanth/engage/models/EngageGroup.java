package com.sreekanth.engage.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "engage_groups")
public class EngageGroup {

    @Id
    private String id;
    private String groupName;
    private Date createdAt;

    public EngageGroup(String groupName, Date date) {
        this.groupName = groupName;
        this.createdAt = date;
    }
}
