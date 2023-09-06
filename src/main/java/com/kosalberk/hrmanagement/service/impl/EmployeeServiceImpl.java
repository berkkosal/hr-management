package com.kosalberk.hrmanagement.service.impl;

import com.kosalberk.hrmanagement.model.dto.EmployeeDto;
import com.kosalberk.hrmanagement.model.entity.Employee;
import com.kosalberk.hrmanagement.model.request.AddEmployeeRequest;
import com.kosalberk.hrmanagement.repository.EmployeeRepository;
import com.kosalberk.hrmanagement.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{

   private final EmployeeRepository employeeRepository;
   private final ModelMapper modelMapper;


    @Override
    public void register(AddEmployeeRequest request) {
        Employee employee = modelMapper.map(request,Employee.class);
        employeeRepository.save(employee);
    }

   


    @Override
    public EmployeeDto entityToDto(Employee employee) {
        return modelMapper.map(employee,EmployeeDto.class);
    }

    @Override
    public Employee dtoToEntity(EmployeeDto employeeDto) {
        return modelMapper.map(employeeDto,Employee.class);
    }

    @Override
    public EmployeeDto getById(Long id) {
        return null;
    }

    @Override
    public EmployeeDto getAll(Long id) {
        return null;
    }

    @Override
    public EmployeeDto Update(Long id, EmployeeDto employeeDto) {
        return null;
    }

    @Override
    public EmployeeDto DeleteById(Long id) {
        return null;
    }






}
