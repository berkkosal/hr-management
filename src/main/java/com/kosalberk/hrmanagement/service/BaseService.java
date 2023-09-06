package com.kosalberk.hrmanagement.service;

import java.util.UUID;

public interface BaseService<D,E> {
    D entityToDto(E e);
    E dtoToEntity(D d);

    D getById(UUID uuid);

    D getAll(Long id);

    D Update(Long id,D d);

    D DeleteById(Long id);

}
