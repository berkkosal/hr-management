package com.kosalberk.hrmanagement.controller.impl;

import com.kosalberk.hrmanagement.controller.EmployeeController;
import com.kosalberk.hrmanagement.model.request.AddEmployeRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeControllerImpl implements EmployeeController {


    @Override
    public ResponseEntity addEmploye(AddEmployeRequest request) {
        return ResponseEntity.ok().body("eklendi");
    }
}
