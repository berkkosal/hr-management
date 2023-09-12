package com.kosalberk.hrmanagement.helper;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@FeignClient(name = "mail-service", url = "http://localhost:8081")
public interface MailHelper {

    @GetMapping("/register-email")
    String sendRegisterEmail (@RequestParam String to);
}

