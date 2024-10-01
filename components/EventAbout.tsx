import React from "react";

interface EventAboutProps {
  artist: string;
  followers: string;
  concerts: string;
}

const EventAbout: React.FC<EventAboutProps> = ({ artist, followers, concerts }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      <h2 className="text-xl font-bold">About</h2>
      <p className="mt-2">{artist}</p>
      <p>{followers} followers</p>
      <p>{concerts} concerts</p>
    </div>
  );
};

export default EventAbout;
