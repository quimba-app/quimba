package com.quimba.backend.controllers;

import com.quimba.backend.entities.Transaction;
import com.quimba.backend.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/transactions")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @PostMapping("/buy")
    public Transaction buyTicket(@RequestParam Long buyerId, @RequestParam Long ticketId) {
        return transactionService.completeTransaction(buyerId, ticketId);
    }
}
