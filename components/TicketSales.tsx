import React from "react";

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

interface TicketSalesProps {
  tickets: Ticket[];  // Expect an array of Ticket
}

const TicketSales: React.FC<TicketSalesProps> = ({ tickets }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Event Sales</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="bg-gray-700 p-4 rounded-lg text-center">
            <img
              src={ticket.imageUrl}
              alt={ticket.section}
              className="w-full h-40 object-cover rounded-lg"
            />
            <p className="mt-2">Section: {ticket.section}</p>
            <p>Row: {ticket.row}, Seat: {ticket.seat}</p>
            <p className="font-bold">Price: ${ticket.price}</p>
            {ticket.isBid && <p>Bid Amount: ${ticket.bidAmount}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketSales;
