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
@Document(collection = "submissions")
public class Submission {

    @Id
    private String id;
    private String assignmentId;
    private String userEmail;
    private String status;
    private Date submissionTime;
    private List<String> fileLinks;
    private Integer pointsReceived;
    private String feedback;
}
