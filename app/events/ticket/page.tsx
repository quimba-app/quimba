'use client'

import React, { useEffect, useState } from "react";
import EventDetailsWithBidding from "@/components/EventDetailsWithBidding";
import EventSpecs from "@/components/EventSpecs";
import EventAbout from "@/components/EventAbout";
import TicketSales from "@/components/TicketSales";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Ticket {
  id: number;
  section: string;
  row: string;
  seat: string;
  price: number;
  imageUrl: string;
  isBid: boolean;
  bidAmount?: number;
}

interface Event {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  liveStatus: string;
  availableSeats: number;
  capacity: number;
  venue: string;
}

export default function TicketDetailsPage() {

  // State to store event and tickets
  const [event, setEvent] = useState<Event | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  // Mock tickets data for testing
  const mockTickets: Ticket[] = [
    {
      id: 1,
      section: "Arena Standing",
      row: "A",
      seat: "10",
      price: 130,
      imageUrl: "/ticket1.jpg",
      isBid: false,
    },
    {
      id: 2,
      section: "Section T14",
      row: "B",
      seat: "15",
      price: 150,
      imageUrl: "/ticket1.jpg",
      isBid: true,
      bidAmount: 145,
    },
    {
      id: 3,
      section: "Section U228",
      row: "C",
      seat: "5",
      price: 95,
      imageUrl: "/ticket1.jpg",
      isBid: false,
    },
    {
      id: 4,
      section: "Section L224",
      row: "D",
      seat: "7",
      price: 100,
      imageUrl: "/ticket1.jpg",
      isBid: true,
      bidAmount: 120,
    },
  ];

  // Mock event data for testing
  const mockEvent: Event = {
    id: 1,
    title: "Saturno World Tour",
    description: "Live from PR's Choliwood, Rauw Alejandro returns to his hometown to deliver an unforgettable experience!",
    imgUrl: "/eventbg1.jpg",
    liveStatus: "LIVE",
    availableSeats: 2400,
    capacity: 18500,
    venue: "El Choli",
  };

  useEffect(() => {
    // Instead of fetching data from an API, we use mock data for testing.
    setTickets(mockTickets);
    setEvent(mockEvent);
  }, []);

  if (!tickets.length || !event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      <div className="container mx-auto p-4">
        {/* Reuse EventDetailsWithBidding component */}
        <EventDetailsWithBidding
          title={event.title}
          description={event.description}
          imgUrl={event.imgUrl}
          liveStatus={event.liveStatus}
          availableSeats={event.availableSeats}
          capacity={event.capacity}
          venue={event.venue}
          currentBid={tickets[0].price} // Example: using the first ticket for current bid
          buyNowPrice={700}
          bidEndTime="12 hours"
          bidNumber="21 Bids"
        />

        {/* Event Specifications */}
        <div className="mt-6">
          <EventSpecs />
        </div>

        {/* About Section */}
        <div className="mt-6">
          <EventAbout artist="Rauw Alejandro" followers="483.9k" concerts="15" />
        </div>

        {/* Event Sales (Tickets) */}
        <div className="mt-6">
          <TicketSales tickets={tickets} /> {/* Passing mock tickets to TicketSales */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
