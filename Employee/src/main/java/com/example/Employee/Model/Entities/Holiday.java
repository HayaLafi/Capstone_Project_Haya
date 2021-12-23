package com.example.Employee.Model.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Holiday {
    @Id
    private int HolidayId;
    private String date;
    private String title;
    private String describe;

    @OneToMany(mappedBy = "holiday")
    @JsonIgnore
    private List<Employee> items = new ArrayList<>();

    public Holiday() {
    }

    public Holiday(int holidayId, String date, String title, String describe, List<Employee> items) {
        HolidayId = holidayId;
        this.date = date;
        this.title = title;
        this.describe = describe;
        this.items = items;
    }

    public int getHolidayId() {
        return HolidayId;
    }

    public void setHolidayId(int holidayId) {
        HolidayId = holidayId;
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

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    public List<Employee> getItems() {
        return items;
    }

    public void setItems(List<Employee> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "Holiday{" +
                "HolidayId=" + HolidayId +
                ", date='" + date + '\'' +
                ", title='" + title + '\'' +
                ", describe='" + describe + '\'' +
                ", items=" + items +
                '}';
    }
}
