package com.kosalberk.hrmanagement.service;

public interface BaseService<D,E> {
    D entityToDto(E e);
    E dtoToEntity(D d);

    D getById(Long id);

    D getAll(Long id);

    D Update(Long id,D d);

    D DeleteById(Long id);

}
