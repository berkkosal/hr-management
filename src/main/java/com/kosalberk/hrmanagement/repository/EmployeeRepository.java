package com.kosalberk.hrmanagement.repository;

import com.kosalberk.hrmanagement.model.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface EmployeeRepository extends JpaRepository <Employee, UUID>{

}
