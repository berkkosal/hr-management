package com.kosalberk.hrmanagement.model.request;

import lombok.Data;

@Data
public class AddEmployeeRequest {

    private String name;
    private String surname;
    private String email;
    private String phoneNumber;
    private String departmentName;
    private String dateStarted;
    private String salary;
}
