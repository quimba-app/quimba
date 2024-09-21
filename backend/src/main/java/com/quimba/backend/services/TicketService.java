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

    public void saveTicket(Ticket ticket) {
        ticketRepository.save(ticket);
    }

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public void deleteTicket(Long ticketId) {
        ticketRepository.deleteById(ticketId);
    }
}
