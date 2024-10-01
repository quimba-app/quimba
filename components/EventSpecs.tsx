import React from "react";

const EventSpecs: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-gray-700 p-4 rounded-lg text-center">
        <p>Ticket Option</p>
        <img src="/spec-icon1.png" alt="Ticket Option" />
      </div>
      <div className="bg-gray-700 p-4 rounded-lg text-center">
        <p>Choliwood</p>
        <img src="/spec-icon2.png" alt="Choliwood" />
      </div>
      <div className="bg-gray-700 p-4 rounded-lg text-center">
        <p>Dance</p>
        <img src="/spec-icon3.png" alt="Dance" />
      </div>
      {/* Add more specs as needed */}
    </div>
  );
};

export default EventSpecs;
