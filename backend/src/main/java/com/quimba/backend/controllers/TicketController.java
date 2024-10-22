package com.quimba.backend.controllers;

import com.quimba.backend.entities.Ticket;
import com.quimba.backend.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tickets")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @GetMapping("/event/{eventId}")
    public List<Ticket> getTicketsForEvent(@PathVariable Long eventId) {
        return ticketService.findTicketsForEvent(eventId);
    }

    @PostMapping("/sell")
    public Ticket postTicketForSale(@RequestBody Ticket ticket) {
        return ticketService.postTicketForSale(ticket);
    }
}

