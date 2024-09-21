package com.quimba.backend.controllers;

import com.quimba.backend.services.UserService;
import com.quimba.backend.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {

    @Autowired
    private TicketService ticketService;

    @Autowired
    private UserService userService;

    @DeleteMapping("/tickets/{ticketId}")
    public void deleteTicket(@PathVariable Long ticketId) {
        ticketService.deleteTicket(ticketId);
    }

    @DeleteMapping("/user/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        userService.deleteUserById(userId);
    }
}
