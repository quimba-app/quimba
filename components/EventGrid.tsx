'use client'

import React from "react";
import EventCard from "./EventCard";
import { useRouter } from "next/navigation";

type EventsGridProps = {
  items: Array<{
    title: string;
    date: string;
    location: string;
    image: string;
  }>;
  sectionTitle: string;
  seeAllLink?: string;
};

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

interface EventInfo {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  status: string;
  availableSeats: number;
  capacity: number;
  venue: string;
  tickets: Ticket[];
}

const EventsGrid: React.FC<EventsGridProps> = ({
  items,
  sectionTitle,
  seeAllLink,
}) => {
  const router = useRouter();

  const handleTicketClick = (ticketId: number) => {
    router.push(`/events/`); // Navigates to /events/ticket?id={ticketId}
  };

  const mockEvent: EventInfo = {
    id: 1,
    title: "Saturno World Tour",
    description:
      "Live from PR's Choliwood, Rauw Alejandro returns to his hometown to deliver an unforgettable experience!",
    imgUrl: "/eventbg1.jpg",
    status: "LIVE",
    availableSeats: 2400,
    capacity: 18500,
    venue: "El Choli",
    tickets: [],
  };

  return (
    <div className="p-8 bg-black">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-quimba font-bold text-3xl">{sectionTitle}</h2>
        {seeAllLink && (
          <a href={seeAllLink} className="text-quimba hover:underline">
            See All
          </a>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div
            key={mockEvent.id}
            className="cursor-pointer"
            onClick={() => handleTicketClick(mockEvent.id)} // Navigates to ticket detail page on click
          >
            <EventCard
              key={index}
              title={item.title}
              date={item.date}
              location={item.location}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsGrid;
