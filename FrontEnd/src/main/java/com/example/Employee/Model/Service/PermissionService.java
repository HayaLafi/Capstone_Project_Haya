package com.example.Employee.Model.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Employee.Model.Repository.PermissionRepository;
import com.example.Employee.Model.Entities.Permission ;
import java.util.List;
import java.util.Optional;

@Service
public class PermissionService {
    private PermissionRepository permissionRepository ;

    @Autowired
    public PermissionService(PermissionRepository permissionRepository) {this.permissionRepository=permissionRepository;}

    public List<Permission> getPermissions() {
        return permissionRepository.findAll();
    }

    public Optional<Permission> getPermission(Integer permissionId) {
        return permissionRepository.findById(permissionId);
    }

    public void addNewPermission(Permission permission) {
        permissionRepository.save(permission);

    }
    public void deletePermission(Integer permissionId) {
        permissionRepository.deleteById(permissionId);
        //boolean exist = employeeRepository.existsById(employeeId);
        // put a condition on 'exist'. if exist then delete
    }

}
