package com.sreekanth.engage.models;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MetaSubmission {

    private String submissionId;
    private String userEmail;
    private String name;
    private String status;
    private Integer points;
}
