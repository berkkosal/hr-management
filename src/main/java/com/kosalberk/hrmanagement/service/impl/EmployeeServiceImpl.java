package com.kosalberk.hrmanagement.service.impl;

import com.kosalberk.hrmanagement.model.entity.Employee;
import com.kosalberk.hrmanagement.model.request.AddEmployeeRequest;
import com.kosalberk.hrmanagement.repository.EmployeeRepository;
import com.kosalberk.hrmanagement.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

   private EmployeeRepository employeeRepository;
   private ModelMapper modelMapper;

    @Override
    public void register(AddEmployeeRequest request) {
        Employee employee = modelMapper.map(request,Employee.class);
        employeeRepository.save(employee);
    }
}
