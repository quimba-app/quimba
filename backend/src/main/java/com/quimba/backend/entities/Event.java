package com.quimba.backend.entities;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "event")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private Long id; // This is the primary key with auto-increment

    private String title;
    private String location;
    private LocalDateTime eventDate;
    private String description;

    // Constructors, Getters, Setters
}
