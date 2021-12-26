package com.example.Employee.Model.Entities;
        import org.aspectj.weaver.ast.Or;
        import javax.persistence.*;

@Entity
@Table
public class Employee {
    @Id
    private int id;
    private String name;
    private String email ;
    private int mobile;
    private String password;


    public Employee() {
    }

    public Employee(int id, String name, String email, String password, int mobile) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
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

    @Override
    public String toString() {
        return "Employee" +
                "{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", mobile='" + mobile + '\'' +
                ", password=" + password +
                '}';
    }
}
