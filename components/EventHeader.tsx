import React from "react";

interface EventHeaderProps {
  title: string;
  description: string;
  imgUrl: string;
  liveStatus: string;
  availableSeats: number;
  capacity: number;
  venue: string;
}

const EventHeader: React.FC<EventHeaderProps> = ({ 
  title, 
  description, 
  imgUrl, 
  liveStatus, 
  availableSeats, 
  capacity, 
  venue 
}) => {
  return (
    <div className="bg-black text-white shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute top-0 left-0  p-4 flex items-center">
          <h1 className="text-4xl font-bold text-quimba">{title}</h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="p-6">
        <p className="text-lg">{description}</p>
        <div className="mt-4">
          <span >Sale <strong className="text-red-600">{liveStatus}</strong></span>
          <span className="mx-4">Available Seats: <strong className="text-quimba">{availableSeats}</strong></span>
          <span>Capacity: <strong className="text-quimba">{capacity}</strong></span>
        </div>
        <div className="mt-4">
          <span>Venue: <strong className="text-quimba">{venue}</strong></span>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="bg-quimba hover:bg-teal-600 text-black font-bold py-2 px-4 rounded">
            Favorite Venue
          </button>
          <button className="bg-quimba hover:bg-teal-600 text-black font-bold py-2 px-4 rounded">
            Seating Chart
          </button>
          <button className="bg-quimba hover:bg-teal-600 text-black font-bold py-2 px-4 rounded">
            Venue Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventHeader
