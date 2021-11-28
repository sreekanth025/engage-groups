package com.sreekanth.engage.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "engage_users")
public class EngageUser {

    @Id
    private String id;
    private String userEmail;
    private String name;
    private String password;
}
