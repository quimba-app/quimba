import React from "react";

interface EventDetailsWithBiddingProps {
  title: string;
  description: string;
  imgUrl: string;
  liveStatus: string;
  availableSeats: number;
  capacity: number;
  venue: string;
  currentBid: number;
  buyNowPrice: number;
  bidEndTime: string;
  bidNumber: string;
}

const EventDetailsWithBidding: React.FC<EventDetailsWithBiddingProps> = ({
  title,
  description,
  imgUrl,
  liveStatus,
  venue,
  currentBid,
  buyNowPrice,
  bidEndTime,
  bidNumber,
}) => {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row shadow-lg p-6">
      {/* Left Side: Event Image */}
      <div className="md:w-1/2">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side: Event Details and Bidding */}
      <div className="md:w-1/2 flex flex-col justify-between md:ml-6 mt-6 md:mt-0">
        <div>
          {/* Event Title and Status */}
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-400">{venue}</p>
          <div className="mt-4">
            <span className="bg-green-500 text-white px-2 py-1 rounded">
              {liveStatus}
            </span>
          </div>

          {/* Event Description */}
          <p className="text-lg mt-4">{description}</p>
        </div>

        {/* Bidding Section */}
        <div className="bg-gray-800 p-4 rounded-lg mt-6">
          <div className="flex justify-between items-center">
            <span className="text-lg">Current Bid</span>
            <span className="text-2xl font-bold">${currentBid}</span>
          </div>
          <p className="text-sm text-gray-400">{bidNumber} Bids</p>
          <p className="text-sm text-gray-400">{bidEndTime} left</p>

          {/* Buttons for Bid and Buy Now */}
          <div className="mt-4">
            <button className="w-full bg-green-600 text-white py-2 rounded-lg font-bold mb-2">
              Place Bid
            </button>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold">
              Buy Now for ${buyNowPrice}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsWithBidding;
