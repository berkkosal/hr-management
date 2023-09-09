package com.kosalberk.hrmanagement.model.dto;

import jakarta.persistence.Column;
import lombok.Data;

import java.util.UUID;

@Data
public class EmployeeDto {
    private UUID uuid;
    private String name;
    private String surname;
    private String email;
    private String phoneNumber;
    private String departmentName;
    private String dateStarted;
    private String salary;
}
