package com.kosalberk.hrmanagement.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Data;


@Data
@Entity
public class Employee extends BaseEntity {

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String surname;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String phoneNumber;
    @Column(nullable = false)
    private String departmentName;
    @Column(nullable = false)
    private String dateStarted;
    @Column(nullable = false)
    private String salary;

}
