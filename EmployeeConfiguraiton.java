package com.example.Employee.Model.Configuraiton;
import com.example.Employee.Model.Entities.Employee;
import com.example.Employee.Model.Repository.EmployeeRepository;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.CommandLineRunner;
        import org.springframework.context.annotation.Bean;

        import java.util.List;

@Configuration
public class EmployeeConfiguraiton {
   @Bean
   CommandLineRunner commandLineRunner(EmployeeRepository repository){
        return args ->{
           Employee haya= new Employee(
                   1,
                    "haya",
                    "haya1995",
                    "Skakah",
                    389

            );
            Employee kholod = new Employee(

                   2,
                    "Kholod",
                    "Kholod123",
                    "ARAR",
                    690

            );
            Employee ali = new Employee(

                    3,
                    "ali",
                   "aliabdallah",
                   "makakh",
                    779

            );
            repository.saveAll(List.of(haya , kholod , ali));
        };
   }
}