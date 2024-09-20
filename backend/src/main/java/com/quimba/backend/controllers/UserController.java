package com.quimba.backend.controllers;

import com.quimba.backend.entities.User;
import com.quimba.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAll(){
        return userService.getAllUsers();
    }

    @GetMapping("/{user_id}")
    public Optional<User> getById(@PathVariable("user_id") Long user_id){
        return userService.getUserById(user_id);
    }

    @PostMapping
    public void saveUpdate(@RequestBody User user){
        userService.saveOrUpdateUser(user);
    }

    @DeleteMapping("/{user_id}")
    public void delete(@PathVariable("user_id") Long user_id){
        userService.deleteUserById(user_id);
    }
}
