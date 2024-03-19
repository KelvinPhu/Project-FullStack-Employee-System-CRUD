package com.SpringReactJS.PracticeJavaSpringReactJS.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.SpringReactJS.PracticeJavaSpringReactJS.exception.EmployeeNotFoundException;
import com.SpringReactJS.PracticeJavaSpringReactJS.model.Employee;
import com.SpringReactJS.PracticeJavaSpringReactJS.repository.EmployeeRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/main")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository empRepo;

	@PostMapping("/employee")
	public Employee newEmployee(@RequestBody Employee newEmployee) {
		return empRepo.save(newEmployee);
	}
	
	@GetMapping("/employee")
	public List<Employee> getAllEmployee(){
		return empRepo.findAll();
	}
	
	@GetMapping("/employee/{id}")
	public Employee getEmployeeById(@PathVariable Long id) {
		return empRepo.findById(id).orElseThrow(() -> new EmployeeNotFoundException(id));
	}
	
	@PutMapping("/employee/{id}")
	public Employee updateEmployee(@RequestBody Employee newEmp, @PathVariable Long id) {
		return empRepo.findById(id).map(emp -> {
			emp.setFirstName(newEmp.getFirstName());
			emp.setLastName(newEmp.getLastName());
			emp.setEmail(newEmp.getEmail());
			return empRepo.save(emp);
		}).orElseThrow(() -> new EmployeeNotFoundException(id));
	}
	
	@DeleteMapping("/employee/{id}")
	public String deleteEmployee(@PathVariable Long id) {
		if(!empRepo.existsById(id)) {
			throw new EmployeeNotFoundException(id);
		}
		empRepo.deleteById(id);
		return "User with id " +id+ " has been deleted success";
	}
}
