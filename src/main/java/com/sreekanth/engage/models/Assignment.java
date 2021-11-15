package com.sreekanth.engage.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "assignments")
public class Assignment {

    @Id
    private String id;
    private String postedBy;
    private String groupId;
    private String title;
    private String instructions;
    private Date dueDate;
    private List<String> fileLinks;
    private Integer points;
}
