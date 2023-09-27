package com.kosalberk.hrmanagement.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

public interface ImageUploadController {
    @PostMapping("/upload-image")
    ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file);
}
