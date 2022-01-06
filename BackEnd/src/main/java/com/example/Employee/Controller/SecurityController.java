package com.example.Employee.Controller;

import com.example.Employee.Model.Entities.Employee;
import com.example.Employee.Model.Service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping(path = "api/security")
public class SecurityController {
    private SecurityService securityService ;
    @Autowired
    public SecurityController (SecurityService securityService){ this.securityService = securityService ;}
    @PostMapping(path= "login")
    public String login(@RequestBody Employee employee){
        return  securityService.getCheck(employee.getEmail(), employee.getPassword());
    }
}
