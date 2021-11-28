package com.sreekanth.engage.services;

import com.sreekanth.engage.models.Submission;
import com.sreekanth.engage.utils.AppConstants;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MailingService {

    private JavaMailSender mailSender;

    public String sendGroupInvitationMail(String adminMail, String groupId, List<String> emailList) {

        String body = "You are invited to join the engage group created by " + adminMail + " \n"
                    + "To join the group, go to " + AppConstants.BASE_URL + "joinGroup/" + groupId + "/";

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("EngageGroups");
        message.setTo(emailList.toArray(new String[0]));
        message.setText(body);
        message.setSubject("Engage Groups: Invitation to join");
        mailSender.send(message);

        return "Invitation Mail Sent";
    }

    public String sendFeedbackMail(String userEmail, Submission submission) {
        String body = "You received " + submission.getPointsReceived() +
                    " points and the feedback for the assignment work is: " +
                    submission.getFeedback() + "\n";

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("EngageGroups");
        message.setTo(userEmail);
        message.setText(body);
        message.setSubject("Engage Groups: Feedback on Assignment");
        mailSender.send(message);

        return "Feedback mail sent";
    }

    public String groupJoiningNotification(String adminEmail, String userEmail) {

        String body = "User " + userEmail + " wants to join your group";

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("EngageGroups");
        message.setTo(adminEmail);
        message.setText(body);
        message.setSubject("Engage Groups: Group joining permission");
        mailSender.send(message);

        return "Joining Notification Sent";
    }
}
