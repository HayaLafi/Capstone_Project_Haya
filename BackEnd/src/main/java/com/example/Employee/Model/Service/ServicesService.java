package com.example.Employee.Model.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Employee.Model.Repository.ServicesRepository;
import com.example.Employee.Model.Entities.Services ;

import java.util.List;
import java.util.Optional;
@Service
public class ServicesService {
    private ServicesRepository servicesRepository ;
    @Autowired
    public ServicesService(ServicesRepository servicesRepository) {this.servicesRepository=servicesRepository;}

    public List<Services> getServices() {
        return servicesRepository.findAll();
    }

    public Optional<Services> getService(Integer serviceId) {
        return servicesRepository.findById(serviceId);
    }

    public void addNewService(Services services) {
        servicesRepository.save(services);

    }
    public void deleteService(Integer serviceId) {
        servicesRepository.deleteById(serviceId);
    }

}
