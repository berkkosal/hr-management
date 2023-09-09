package com.kosalberk.hrmanagement.controller;

import com.kosalberk.hrmanagement.model.dto.EmployeeDto;
import com.kosalberk.hrmanagement.model.request.AddEmployeeRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

public interface EmployeeController<D> {

    //? Add Employee
    @PostMapping("/add-employee")
    ResponseEntity<AddEmployeeRequest> addEmployee(@RequestBody AddEmployeeRequest request);

    //? Get Employee
    @GetMapping("/get-employee/{uuid}")
    ResponseEntity<EmployeeDto> getEmployee(@PathVariable UUID uuid);

    //? Update Employee
    @PutMapping("/update-employee/{uuid}")
    ResponseEntity <EmployeeDto> updateEmployee(@RequestBody EmployeeDto employeeDto, @PathVariable UUID uuid);

    //? Get All Employees
    @GetMapping("/get-employees")
    ResponseEntity<List<D>> getAllEmployees();

    @DeleteMapping("delete-employee/{uuid}")
    ResponseEntity<EmployeeDto> deleteEmployee(@PathVariable UUID uuid);



}
