package com.sreekanth.engage.services;

import com.sreekanth.engage.models.Submission;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MailingService {

    public String sendGroupInvitationMail(String adminMail, String groupId, List<String> emailList) {
//        TODO
        return "Under development";
    }

    public String sendFeedbackMail(String userEmail, Submission submission) {
//        TODO
        return "Under development";
    }

    public String groupJoiningNotification() {
//        TODO
        return "under development";
    }
}
