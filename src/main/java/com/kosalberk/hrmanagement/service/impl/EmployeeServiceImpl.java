package com.kosalberk.hrmanagement.service.impl;

import com.kosalberk.hrmanagement.model.dto.EmployeeDto;
import com.kosalberk.hrmanagement.model.entity.Employee;
import com.kosalberk.hrmanagement.model.request.AddEmployeeRequest;
import com.kosalberk.hrmanagement.repository.EmployeeRepository;
import com.kosalberk.hrmanagement.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

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

   

    //!MODEL MAPPER
    @Override
    public EmployeeDto entityToDto(Employee employee) {
        return modelMapper.map(employee,EmployeeDto.class);
    }
    @Override
    public Employee dtoToEntity(EmployeeDto employeeDto) {
        return modelMapper.map(employeeDto,Employee.class);
    }

    //!BASE
    @Override
    public EmployeeDto getById(UUID uuid) {
        Optional<Employee> employee = employeeRepository.findById(uuid);
        return employee.isPresent() ? entityToDto(employee.get()) : null;

//        Optional<Employee> employee = null;
//        if(uuid!=null){
//            employee = employeeRepository.findById(uuid);
//        } return employee.isPresent() ? entityToDto(employee)
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
