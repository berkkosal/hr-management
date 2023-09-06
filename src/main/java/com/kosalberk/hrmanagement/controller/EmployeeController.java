package com.kosalberk.hrmanagement.controller;

import com.kosalberk.hrmanagement.model.dto.EmployeeDto;
import com.kosalberk.hrmanagement.model.request.AddEmployeeRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.UUID;

public interface EmployeeController {

    @PostMapping("/add-employee")
    ResponseEntity<AddEmployeeRequest> addEmployee(@RequestBody AddEmployeeRequest request);

    @GetMapping("/get-employee/{uuid}")
    ResponseEntity<EmployeeDto> getEmployee(@PathVariable UUID uuid);

}
