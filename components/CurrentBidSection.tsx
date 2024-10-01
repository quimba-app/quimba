import React from "react";

interface CurrentBidSectionProps {
  currentBid: number;
  buyNowPrice: number;
  bidEndTime: string;
  bidNumber: string;
}

const CurrentBidSection: React.FC<CurrentBidSectionProps> = ({
  currentBid,
  buyNowPrice,
  bidEndTime,
  bidNumber,
}) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold">Current Bid</h2>
        <span className="text-3xl font-bold">${currentBid}</span>
      </div>
      <div className="mt-4">
        <p>{bidNumber}</p>
        <p>{bidEndTime} left</p>
        <button className="bg-green-500 text-white w-full py-2 mt-4 rounded">Place Bid</button>
        <button className="bg-blue-500 text-white w-full py-2 mt-2 rounded">Buy Now for ${buyNowPrice}</button>
      </div>
    </div>
  );
};

export default CurrentBidSection;
