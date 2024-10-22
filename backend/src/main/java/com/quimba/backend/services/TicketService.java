package com.quimba.backend.services;

import com.quimba.backend.entities.Ticket;
import com.quimba.backend.repositories.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    public List<Ticket> findTicketsForEvent(Long eventId) {
        return ticketRepository.findByEventIdAndSoldFalse(eventId);
    }

    public Ticket postTicketForSale(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    public void markTicketAsSold(Long ticketId) {
        Ticket ticket = ticketRepository.findById(ticketId).orElseThrow(() -> new RuntimeException("Ticket not found"));
        ticket.setSold(true);
        ticketRepository.save(ticket);
    }
}

