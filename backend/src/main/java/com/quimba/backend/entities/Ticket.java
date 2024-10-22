package com.quimba.backend.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Changed from "Id" to "id" for consistency

    @ManyToOne
    @JoinColumn(name = "ticket_event_id", referencedColumnName = "event_id", foreignKey = @ForeignKey(name = "FK_ticket_event"))
    private Event event;

    @ManyToOne
    @JoinColumn(name = "ticket_seller_id", referencedColumnName = "seller_id", nullable = false)
    private User seller;

    private double price;
    private boolean sold;

    // Constructors, Getters, Setters
}
