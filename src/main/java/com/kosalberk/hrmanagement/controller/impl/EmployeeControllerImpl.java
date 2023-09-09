package com.kosalberk.hrmanagement.controller.impl;

import com.kosalberk.hrmanagement.controller.EmployeeController;
import com.kosalberk.hrmanagement.model.dto.EmployeeDto;
import com.kosalberk.hrmanagement.model.request.AddEmployeeRequest;
import com.kosalberk.hrmanagement.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class EmployeeControllerImpl implements EmployeeController {

    private EmployeeService employeeService;

    //? Add Employee
    @Override
    public ResponseEntity<AddEmployeeRequest> addEmployee(AddEmployeeRequest request) {
        employeeService.register(request);
        return ResponseEntity.ok().body(request);
    }

    //? Get Employee
    @Override
    public ResponseEntity<EmployeeDto> getEmployee(UUID uuid) {
       return ResponseEntity.ok().body(employeeService.getById(uuid));
    }
    //? Update Employee
    @Override
    public ResponseEntity<EmployeeDto> updateEmployee(EmployeeDto employeeDto, UUID uuid) {

        return ResponseEntity.ok().body(employeeService.update(uuid,employeeDto));
    }

    //? Delete Employee
    public ResponseEntity<EmployeeDto> deleteEmployee(UUID uuid){
        return new ResponseEntity<>(employeeService.deleteById(uuid), HttpStatus.OK);
    }


    //? Get All Employees
    @Override
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        return ResponseEntity.ok().body((List<EmployeeDto>) employeeService.employeeServiceList());
    }











}
