package com.kosalberk.hrmanagement.controller;

import com.kosalberk.hrmanagement.model.request.AddEmployeeRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface EmployeeController {

    @PostMapping("/add-user")
    ResponseEntity addEmploye(@RequestBody AddEmployeeRequest request);


}
