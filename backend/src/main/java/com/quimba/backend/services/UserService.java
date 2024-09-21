package com.quimba.backend.services;

import com.quimba.backend.entities.User;
import com.quimba.backend.entities.Role;
import com.quimba.backend.repositories.RoleRepository;
import com.quimba.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public void registerUser(User user) {
        // Encrypt the password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Assign default role (e.g., ROLE_USER)
        Role userRole = roleRepository.findByName("ROLE_USER").orElseThrow(() -> new RuntimeException("Role not found"));
        user.getRoles().add(userRole);

        // Save the user
        userRepository.save(user);
    }

    public void assignRoleToUser(Long userId, String roleName) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Role role = roleRepository.findByName(roleName).orElseThrow(() -> new RuntimeException("Role not found"));
        user.getRoles().add(role);
        userRepository.save(user);
    }

    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }
}
