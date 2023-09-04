package com.kosalberk.hrmanagement.controller;

import com.kosalberk.hrmanagement.model.entity.Employee;
import com.kosalberk.hrmanagement.model.request.AddEmployeRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface EmployeeController {

    ResponseEntity addEmploye(@RequestBody AddEmployeRequest request);


}
