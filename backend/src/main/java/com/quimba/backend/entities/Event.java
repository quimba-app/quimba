package com.quimba.backend.entities;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String location;
    private LocalDateTime eventDate;
    private String description;

    // Constructors, Getters, Setters
}

