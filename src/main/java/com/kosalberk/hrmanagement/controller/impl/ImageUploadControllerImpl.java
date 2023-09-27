package com.kosalberk.hrmanagement.controller.impl;

import com.kosalberk.hrmanagement.controller.ImageUploadController;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Objects;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class ImageUploadControllerImpl implements ImageUploadController {

    @Override
    public ResponseEntity<String> uploadImage(MultipartFile file) {

        try {
            String uploadDirectory = "C:\\Users\\Berk_Koşal\\Desktop\\hr-uploads";
            String fileName = StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));
            Path filePath = Path.of(uploadDirectory + fileName);
            Files.copy(file.getInputStream(), filePath);
            System.out.println(file.getOriginalFilename());
            System.out.println(file.getName());
            System.out.println(file.getContentType());
            System.out.println(file.getResource());

        } catch (Exception e) {

        }

        return ResponseEntity.ok().body("Başarıyla alındı");
    }

}
