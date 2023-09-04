package com.kosalberk.hrmanagement.model.response;

import lombok.Data;
import org.springframework.http.ResponseEntity;

@Data
public class BaseResponse <T> {
    private boolean isSuccess;
    private T data;

    public static <T>ResponseEntity<BaseResponse<T>> ok(T data, Integer statusCode){
        BaseResponse<T> response = new BaseResponse<>();
        response.setSuccess(true);
        response.setData(data);
        return ResponseEntity.status(statusCode).body(response);
    }
}
