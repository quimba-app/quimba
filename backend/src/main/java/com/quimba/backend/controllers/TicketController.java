package com.quimba.backend.controllers;

import com.quimba.backend.entities.Ticket;
import com.quimba.backend.entities.User;
import com.quimba.backend.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @PostMapping("/sell")
    public void sellTicket(@RequestBody Ticket ticket, Authentication authentication) {
        User seller = (User) authentication.getPrincipal();
        ticket.setSeller(seller);
        ticketService.saveTicket(ticket);
    }

    @GetMapping("/buy")
    public List<Ticket> buyTickets() {
        return ticketService.getAllTickets();
    }
}
