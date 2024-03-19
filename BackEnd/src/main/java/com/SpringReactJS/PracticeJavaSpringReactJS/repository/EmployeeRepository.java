package com.SpringReactJS.PracticeJavaSpringReactJS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SpringReactJS.PracticeJavaSpringReactJS.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
