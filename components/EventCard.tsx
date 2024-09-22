import React from 'react';

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  image: string;
};

const EventCard: React.FC<EventCardProps> = ({ title, date, location, image }) => {
  return (
    <div className="border-8 border-quimba rounded-lg p-4 hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-80 object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="absolute bottom-4 left-4 z-10">
          <h3 className="text-teal-300 font-bold text-xl">{title}</h3>
          <p className="text-white">{date}</p>
          <p className="text-white">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
