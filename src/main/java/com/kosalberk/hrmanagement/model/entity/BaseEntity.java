package com.kosalberk.hrmanagement.model.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.util.UUID;
@Data
@MappedSuperclass
public class BaseEntity
{   @Id
    @GeneratedValue(strategy = GenerationType.UUID )
    private UUID uuid;

    @CreationTimestamp
    private Timestamp createdTime;

    @UpdateTimestamp
    private Timestamp updatedTime;

    @Column
    private Timestamp deletedTime;

}
