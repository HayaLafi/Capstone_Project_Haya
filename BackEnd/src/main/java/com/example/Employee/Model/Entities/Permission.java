package com.example.Employee.Model.Entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Entity
@Table
public class Permission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int permissionId;
    private String name;
    private String module;

    @ManyToMany(mappedBy = "empolyeePermission")
    Set<Employee> permissionemployee;


    public Permission(int permissionId, String name, String module) {
        this.permissionId = permissionId;
        this.name = name;
        this.module = module;
    }

    public Permission() {
    }

    public void setPermissionId(int permissionId) {
        this.permissionId = permissionId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setModule(String module) {
        this.module = module;
    }

    public int getPermissionId() {
        return permissionId;
    }

    public String getName() {
        return name;
    }

    public String getModule() {
        return module;
    }
}