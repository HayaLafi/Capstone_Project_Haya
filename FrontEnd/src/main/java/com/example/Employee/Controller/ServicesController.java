package com.example.Employee.Controller;
import com.example.Employee.Model.Entities.Services;
import com.example.Employee.Model.Service.ServicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/service")
public class ServicesController {
    private ServicesService servicesService ;
    @Autowired
    public ServicesController(ServicesService servicesService) {
        this.servicesService = servicesService;
    }
    @GetMapping
    public List<Services> getServices() {
        return servicesService.getServices();
    }
    @GetMapping(path = "{serviceId}")
    public Optional<Services> getService(@PathVariable(name = "serviceId") Integer serviceId) {
        return servicesService.getService(serviceId);
    }

    @PostMapping(path = "add")
    public void registerNewService(@RequestBody Services services){
        servicesService.addNewService(services);
    }


    @DeleteMapping(path = "delete/{ServiceID}")
    public void deleteService(@PathVariable ("ServiceID") String ServiceID){
        int serviceID= Integer.parseInt(ServiceID);
        servicesService.deleteService(serviceID);
    }

}
