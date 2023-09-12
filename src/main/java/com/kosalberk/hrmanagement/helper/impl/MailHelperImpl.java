package com.kosalberk.hrmanagement.helper.impl;

import com.kosalberk.hrmanagement.helper.MailHelper;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class MailHelperImpl implements MailHelper {


    private JavaMailSender mailSender;

    @Override
    public void sendEmail(String to, String subject, String message) {

            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setTo(to);
            simpleMailMessage.setFrom("bigarson");
            simpleMailMessage.setSubject(subject);
            simpleMailMessage.setText(message);
            mailSender.send(simpleMailMessage);

    }
}
