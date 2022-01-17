package com.example.Employee.Controller;

import com.example.Employee.Model.Entities.Employee;
import com.example.Employee.Model.Service.EmployeeService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

class EmployeeControllerTest {
    @Mock
    EmployeeService employeeService;
    @InjectMocks
    EmployeeController employeeController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetEmployees() {
        when(employeeService.getEmployees()).thenReturn(Arrays.<Employee>asList(new Employee(0, "name", "email", 0, "password", "photo")));

        List<Employee> result = employeeController.getEmployees();
        Assertions.assertEquals(Arrays.<Employee>asList(new Employee(0, "name", "email", 0, "password", "photo")), result);
    }

    @Test
    void testGetEmployee() {
        when(employeeService.getEmployee(anyInt())).thenReturn(null);

        Optional<Employee> result = employeeController.getEmployee(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testCheckLogin() {
        when(employeeService.getCheck(anyString(), anyString())).thenReturn("getCheckResponse");

        String result = employeeController.checkLogin("email", "password");
        Assertions.assertEquals("replaceMeWithExpectedResult", result);
    }

    @Test
    void testRegisterNewEmployee() {
        employeeController.registerNewEmployee(new Employee(0, "name", "email", 0, "password", "photo"));
    }

    @Test
    void testDeleteEmployee() {
        employeeController.deleteEmployee(Integer.valueOf(0));
    }


}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme