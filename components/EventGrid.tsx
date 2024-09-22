import React from 'react';
import EventCard from './EventCard';

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

const EventsGrid: React.FC<EventsGridProps> = ({ items, sectionTitle, seeAllLink }) => {
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
          <EventCard key={index} title={item.title} date={item.date} location={item.location} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default EventsGrid;
