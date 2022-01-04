package com.example.Employee.Model.Repository;

import com.example.Employee.Model.Entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    @Query("SELECT email  FROM Employee WHERE email = :email AND password = :password ")
    String findByEmailAngdPassword(@Param("email") String email , @Param("password") String password) ;
}
