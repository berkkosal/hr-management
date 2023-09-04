package com.kosalberk.hrmanagement.controller.impl;

import com.kosalberk.hrmanagement.controller.EmployeeController;
import com.kosalberk.hrmanagement.model.request.AddEmployeRequest;
import com.kosalberk.hrmanagement.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class EmployeeControllerImpl implements EmployeeController {

    private EmployeeService employeeService;

    @Override
    public ResponseEntity addEmploye(AddEmployeRequest request) {
        employeeService.register(request);
        return ResponseEntity.ok().body(request);
    }
}
