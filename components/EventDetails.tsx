import React from "react";

interface EventDetailsProps {
  title: string;
  description: string;
  imgUrl: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <img src={imgUrl} alt={title} className="w-full mt-4 rounded-lg" />
    </div>
  );
};

export default EventDetails;
