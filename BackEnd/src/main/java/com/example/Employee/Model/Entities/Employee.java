package com.example.Employee.Model.Entities;
        import com.fasterxml.jackson.annotation.JsonIgnore;
        import org.aspectj.weaver.ast.Or;
        import javax.persistence.*;
        import java.util.ArrayList;
        import java.util.List;
        import java.util.Set;

@Entity
@Table
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private int mobile;
    private String password;


    @OneToMany(mappedBy = "employee")
    @JsonIgnore
    private List<Holiday> items = new ArrayList<>();



    @ManyToMany
    @JoinTable(
            name = "employee_services",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "services_id"))
    Set<Services> empolyeeServices;

    @ManyToMany
    @JoinTable(
            name = "employee_permission",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "permission_id"))
    Set<Permission> empolyeePermission;

    public Employee() {
    }

    public Employee(int id, String name, String email, int mobile, String password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.password = password;
    }


    public void setEmpolyeeServices(Set<Services> empolyeeServices) {
        this.empolyeeServices = empolyeeServices;
    }

    public Set<Services> getEmpolyeeServices() {
        return empolyeeServices;
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

    public List<Holiday> getItems() {
        return items;
    }

    public void setItems(List<Holiday> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", mobile=" + mobile +
                ", password='" + password + '\'' +
                ", holiday=" + getItems().listIterator() +
                '}';
    }
}