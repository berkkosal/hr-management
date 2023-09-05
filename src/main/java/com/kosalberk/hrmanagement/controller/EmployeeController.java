package com.kosalberk.hrmanagement.controller;

import com.kosalberk.hrmanagement.model.request.AddEmployeeRequest;
import com.kosalberk.hrmanagement.model.response.BaseResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface EmployeeController {

    @PostMapping("/add-employee")
    ResponseEntity<BaseResponse<?>> addEmploye(@RequestBody AddEmployeeRequest request);


}
