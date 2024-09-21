package com.quimba.backend.repositories;

import com.quimba.backend.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    // Method to find role by name
    Optional<Role> findByName(String name);
}
