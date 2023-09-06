package com.kosalberk.hrmanagement.controller.impl;

import com.kosalberk.hrmanagement.controller.EmployeeController;
import com.kosalberk.hrmanagement.model.dto.EmployeeDto;
import com.kosalberk.hrmanagement.model.request.AddEmployeeRequest;
import com.kosalberk.hrmanagement.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class EmployeeControllerImpl implements EmployeeController {

    private EmployeeService employeeService;

    //*Generic olarak kullanamıyorum?
    @Override
    public ResponseEntity<AddEmployeeRequest> addEmployee(AddEmployeeRequest request) {
        employeeService.register(request);
        return ResponseEntity.ok().body(request);
    }


    //*Generic olarak kullanamıyorum?
    @Override
    public ResponseEntity<EmployeeDto> getEmployee(UUID uuid) {
       return ResponseEntity.ok().body(employeeService.getById(uuid));
    }
}
