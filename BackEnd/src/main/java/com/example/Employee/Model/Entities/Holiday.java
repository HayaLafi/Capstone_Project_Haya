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
    private int holidayId;
    private String date;
    private String title;
    private String description;

  @OneToMany(mappedBy = "holiday")
   @JsonIgnore
   private List<Employee> items = new ArrayList<>();

    public Holiday() {
    }

    public Holiday(int holidayId, String date, String title, String description) {
        holidayId = holidayId;
        this.date = date;
        this.title = title;
        this.description = description;
    }

    public int getHolidayId() {
        return holidayId;
    }

    public void setHolidayId(int holidayId) {
        holidayId = holidayId;
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

    public List<Employee> getItems() {
        return items;
    }

    public void setItems(List<Employee> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "Holiday{" +
                "holidayId=" + holidayId +
                ", date='" + date + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", items=" + items +
                '}';
    }
}


