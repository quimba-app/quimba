interface TicketCardProps {
    section: string;
    row: string;
    seat: string;
    price: number;
    imageUrl: string;
    isBid?: boolean;  // For handling "Make Bid" vs "Buy Now"
    bidAmount?: number;  // Optional, only needed if it's a bid
  }
  
  const TicketCard: React.FC<TicketCardProps> = ({
    section,
    row,
    seat,
    price,
    imageUrl,
    isBid = false,
    bidAmount
  }) => {
    return (
      <div className="bg-white rounded-md shadow-md p-4 text-black">
        {/* Ticket Image */}
        <img src={imageUrl} alt="Ticket" className="rounded-md w-full h-40 md:h-64 object-cover" />
  
        {/* Ticket Details */}
        <div className="mt-4">
          <p className="text-sm font-semibold">Section {section}</p>
          <p className="text-sm font-bold">Row {row}</p>
          <p className="text-sm font-bold">Seat {seat}</p>
        </div>
  
        {/* Price and Action */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold p-2">${price}</span>
          {isBid ? (
            <button className="bg-red-500 text-black font-bold px-4 py-2 rounded-md hover:bg-red-600">
              Make Bid ${bidAmount}
            </button>
          ) : (
            <button className="bg-quimba text-black px-4 font-bold py-2 rounded-md hover:bg-teal-600">
              Buy Now
            </button>
          )}
        </div>
      </div>
    );
  };
  
  export default TicketCard;
  