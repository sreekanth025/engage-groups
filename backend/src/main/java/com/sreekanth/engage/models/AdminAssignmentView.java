package com.sreekanth.engage.models;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AdminAssignmentView {

    private Assignment assignment;
    private List<MetaSubmission> submissions;
}
