package com.quimba.backend.services;

import com.quimba.backend.entities.Ticket;
import com.quimba.backend.entities.Transaction;
import com.quimba.backend.entities.User;
import com.quimba.backend.repositories.TicketRepository;
import com.quimba.backend.repositories.TransactionRepository;
import com.quimba.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private UserRepository userRepository;

    public Transaction completeTransaction(Long buyerId, Long ticketId) {
        // Fetch the buyer from the database
        User buyer = userRepository.findById(buyerId)
                .orElseThrow(() -> new RuntimeException("Buyer not found"));

        // Fetch the ticket from the database
        Ticket ticket = ticketRepository.findById(ticketId)
                .orElseThrow(() -> new RuntimeException("Ticket not found"));

        // Mark the ticket as sold
        ticket.setSold(true);
        ticketRepository.save(ticket);  // Save the updated ticket

        // Create and save the transaction
        Transaction transaction = new Transaction();
        transaction.setBuyer(buyer);  // Set the buyer (actual User object)
        transaction.setTicket(ticket);  // Set the ticket (actual Ticket object)
        transaction.setTransactionDate(LocalDateTime.now());

        return transactionRepository.save(transaction);
    }
}


