package com.kosalberk.hrmanagement.service;

import java.util.UUID;

public interface BaseService<D,E> {

    //! MODEL MAPPER
    D entityToDto(E e);
    E dtoToEntity(D d);


    //!
    D getById(UUID uuid);

    D getAll(Long id);

    D update(UUID id,D d);

    D deleteById(UUID id);

}
