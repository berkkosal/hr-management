package com.kosalberk.hrmanagement.model.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class EmployeeDto {
    private UUID uuid;
    private String name;
    private String surname;
}
