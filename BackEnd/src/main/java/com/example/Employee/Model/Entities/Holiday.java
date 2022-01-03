package com.example.Employee.Model.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table
public class Holiday {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int holidayId;
    private String date;
    private String title;
    private String description;



    @ManyToOne
    @JoinColumn(name= "employee_id" ,referencedColumnName = "id")
    private Employee employee;

    public Holiday(int holidayId, String date, String title, String description, Employee employee) {
        this.holidayId = holidayId;
        this.date = date;
        this.title = title;
        this.description = description;
        this.employee = employee;
    }

    public Holiday() {
    }

    public int getHolidayId() {
        return holidayId;
    }

    public void setHolidayId(int holidayId) {
        this.holidayId = holidayId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}
