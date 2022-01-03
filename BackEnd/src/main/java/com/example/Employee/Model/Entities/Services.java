package com.example.Employee.Model.Entities;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Entity
@Table
public class Services {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int serviceId;
    private String entryCard;
    private String permit;
    private String clearanceList;
    private String suggestion;


    @ManyToMany(mappedBy = "empolyeeServices")
    Set<Employee> servicesemployee;

    public Services() {
    }

    public Services(int serviceId, String entryCard, String permit, String clearanceList, String suggestion) {
        this.serviceId = serviceId;
        this.entryCard = entryCard;
        this.permit = permit;
        this.clearanceList = clearanceList;
        this.suggestion = suggestion;
    }

    public void setServiceId(int serviceId) {
        this.serviceId = serviceId;
    }

    public void setEntryCard(String entryCard) {
        this.entryCard = entryCard;
    }

    public void setPermit(String permit) {
        this.permit = permit;
    }

    public void setClearanceList(String clearanceList) {
        this.clearanceList = clearanceList;
    }

    public void setSuggestion(String suggestion) {
        this.suggestion = suggestion;
    }

    public int getServiceId() {
        return serviceId;
    }

    public String getEntryCard() {
        return entryCard;
    }

    public String getPermit() {
        return permit;
    }

    public String getClearanceList() {
        return clearanceList;
    }

    public String getSuggestion() {
        return suggestion;
    }
}
