package com.example.Employee.Model.Entities;
        import org.aspectj.weaver.ast.Or;
        import javax.persistence.*;

@Entity
@Table
public class Employee {
    @Id
    private int id;
    private String name;
    private String email;
    private int mobile;
    private String password;

   @ManyToOne
   @JoinColumn(name= "holiday_id" ,referencedColumnName = "HolidayId")
    private Holiday holiday;

    public Employee() {
    }

    public Employee(int id, String name, String email, int mobile, String password, Holiday holiday) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.password = password;
        this.holiday = holiday;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getMobile() {
        return mobile;
    }

    public void setMobile(int mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Holiday getHoliday() {
        return holiday;
    }

    public void setHoliday(Holiday holiday) {
        this.holiday = holiday;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", mobile=" + mobile +
                ", password='" + password + '\'' +
                '}';
    }
}