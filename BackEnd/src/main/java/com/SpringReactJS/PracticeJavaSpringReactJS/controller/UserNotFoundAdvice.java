package com.SpringReactJS.PracticeJavaSpringReactJS.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.SpringReactJS.PracticeJavaSpringReactJS.exception.EmployeeNotFoundException;

@ControllerAdvice
public class UserNotFoundAdvice {
	
	@ResponseBody
	@ExceptionHandler(EmployeeNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Map<String, String> exceptionHandle(EmployeeNotFoundException exception){
		Map<String, String> errorMap = new HashMap<>();
		errorMap.put("error message", exception.getMessage());
		return errorMap;
	}
}
