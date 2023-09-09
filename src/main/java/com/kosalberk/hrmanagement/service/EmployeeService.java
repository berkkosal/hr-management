package com.kosalberk.hrmanagement.service;


import com.kosalberk.hrmanagement.model.dto.EmployeeDto;
import com.kosalberk.hrmanagement.model.entity.Employee;
import com.kosalberk.hrmanagement.model.request.AddEmployeeRequest;

import java.util.List;
import java.util.UUID;


public interface EmployeeService extends BaseService<EmployeeDto,Employee>{


     void register(AddEmployeeRequest request);
     List<?> employeeServiceList();



}
