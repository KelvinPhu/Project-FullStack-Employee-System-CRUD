package com.SpringReactJS.PracticeJavaSpringReactJS.exception;

public class EmployeeNotFoundException extends RuntimeException{
	public EmployeeNotFoundException(Long id) {
		super("Could not found Employee with id " +id);
	}
}
