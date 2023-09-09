package com.kosalberk.hrmanagement.service.impl;

import com.kosalberk.hrmanagement.model.dto.EmployeeDto;
import com.kosalberk.hrmanagement.model.entity.Employee;
import com.kosalberk.hrmanagement.model.request.AddEmployeeRequest;
import com.kosalberk.hrmanagement.repository.EmployeeRepository;
import com.kosalberk.hrmanagement.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final ModelMapper modelMapper;

    //? Add Employee
    @Override
    public void register(AddEmployeeRequest request) {
        Employee employee = modelMapper.map(request, Employee.class);
        employeeRepository.save(employee);
    }

//    @Override
//    public EmployeeDto employeeUpdate(UUID uuid, EmployeeDto employeeDto) {
//        return null;
//    }

    //? Get All Employees
    @Override
    public List<?> employeeServiceList() {
        return employeeRepository.findAll();
    }


    //!MODEL MAPPER
    @Override
    public EmployeeDto entityToDto(Employee employee) {
        return modelMapper.map(employee, EmployeeDto.class);
    }

    @Override
    public Employee dtoToEntity(EmployeeDto employeeDto) {
        return modelMapper.map(employeeDto, Employee.class);
    }

    //!BASE
    //? Get Employee
    @Override
    public EmployeeDto getById(UUID uuid) {
        Optional<Employee> employee = employeeRepository.findById(uuid);
        return employee.isPresent() ? entityToDto(employee.get()) : null;

    }

    @Override
    public EmployeeDto getAll(Long id) {
        return null;
    }

    @Override
    public EmployeeDto update(UUID uuid, EmployeeDto employeeDto) {
        EmployeeDto employeeDto1 = getById(uuid);
        if (employeeDto1 != null) {
            Employee employee = dtoToEntity(employeeDto1);
            employee.setName(employeeDto.getName());
            employee.setSurname(employeeDto.getSurname());
            employee.setPhoneNumber(employeeDto.getPhoneNumber());
            employee.setDepartmentName(employeeDto.getDepartmentName());
            employee.setDateStarted(employeeDto.getDateStarted());
            employee.setSalary(employeeDto.getSalary());
            employeeRepository.save(employee);

        }


        return employeeDto;
    }


    @Override
    public EmployeeDto deleteById(UUID uuid) {
        EmployeeDto employeeDto = getById(uuid);
        if (employeeDto != null) {
            employeeRepository.deleteById(uuid);
        }
        return employeeDto;
    }


}
