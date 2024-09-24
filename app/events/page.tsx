import EventHeader from '@/components/EventHeader'
import NavBar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar' // Assuming Sidebar and TicketCard exist
import TicketCard from '@/components/TicketCard'
import React from 'react'

const tickets = [
  {
    section: '115',
    row: 'B',
    seat: '18',
    price: 270,
    imageUrl: '/ticket1.jpg',
    isBid: false
  },
  {
    section: '119',
    row: 'C',
    seat: '11',
    price: 150,
    imageUrl: '/ticket1.jpg',
    isBid: true,
    bidAmount: 1350,
  },{
    section: '115',
    row: 'B',
    seat: '18',
    price: 270,
    imageUrl: '/ticket1.jpg',
    isBid: false
  },
  {
    section: '119',
    row: 'C',
    seat: '11',
    price: 150,
    imageUrl: '/ticket1.jpg',
    isBid: true,
    bidAmount: 1350,
  },{
    section: '115',
    row: 'B',
    seat: '18',
    price: 270,
    imageUrl: '/ticket1.jpg',
    isBid: false
  },
  {
    section: '119',
    row: 'C',
    seat: '11',
    price: 150,
    imageUrl: '/ticket1.jpg',
    isBid: true,
    bidAmount: 1350,
  },{
    section: '115',
    row: 'B',
    seat: '18',
    price: 270,
    imageUrl: '/ticket1.jpg',
    isBid: false
  },
  {
    section: '119',
    row: 'C',
    seat: '11',
    price: 150,
    imageUrl: '/ticket1.jpg',
    isBid: true,
    bidAmount: 1350,
  },{
    section: '115',
    row: 'B',
    seat: '18',
    price: 270,
    imageUrl: '/ticket1.jpg',
    isBid: false
  },
  {
    section: '119',
    row: 'C',
    seat: '11',
    price: 150,
    imageUrl: '/ticket1.jpg',
    isBid: true,
    bidAmount: 1350,
  },{
    section: '115',
    row: 'B',
    seat: '18',
    price: 270,
    imageUrl: '/ticket1.jpg',
    isBid: false
  },
  {
    section: '119',
    row: 'C',
    seat: '11',
    price: 150,
    imageUrl: '/ticket1.jpg',
    isBid: true,
    bidAmount: 1350,
  },{
    section: '115',
    row: 'B',
    seat: '18',
    price: 270,
    imageUrl: '/ticket1.jpg',
    isBid: false
  },
  {
    section: '119',
    row: 'C',
    seat: '11',
    price: 150,
    imageUrl: '/ticket1.jpg',
    isBid: true,
    bidAmount: 1350,
  },{
    section: '115',
    row: 'B',
    seat: '18',
    price: 270,
    imageUrl: '/ticket1.jpg',
    isBid: false
  },
  {
    section: '119',
    row: 'C',
    seat: '11',
    price: 150,
    imageUrl: '/ticket1.jpg',
    isBid: true,
    bidAmount: 1350,
  },{
    section: '115',
    row: 'B',
    seat: '18',
    price: 270,
    imageUrl: '/ticket1.jpg',
    isBid: false
  },
  {
    section: '119',
    row: 'C',
    seat: '11',
    price: 150,
    imageUrl: '/ticket1.jpg',
    isBid: true,
    bidAmount: 1350,
  },{
    section: '115',
    row: 'B',
    seat: '18',
    price: 270,
    imageUrl: '/ticket1.jpg',
    isBid: false
  },
  {
    section: '119',
    row: 'C',
    seat: '11',
    price: 150,
    imageUrl: '/ticket1.jpg',
    isBid: true,
    bidAmount: 1350,
  },{
    section: '115',
    row: 'B',
    seat: '18',
    price: 270,
    imageUrl: '/ticket1.jpg',
    isBid: false
  },
  {
    section: '119',
    row: 'C',
    seat: '11',
    price: 150,
    imageUrl: '/ticket1.jpg',
    isBid: true,
    bidAmount: 1350,
  },
  // Add more tickets as needed
];

export default function Events() {
  return (
    <div>
      {/* Navbar at the top */}
      <NavBar />

      {/* Event Header */}
      <EventHeader
        title="SATURNO"
        description="After kicking off at Hard Rock Stadium in Miami, FL, Bad Bunny returns to his beloved home of San Juan, PR."
        imgUrl='/eventbg1.jpg'  
        liveStatus="LIVE"
        availableSeats={2400}
        capacity={18500}
        venue="El Choli"
      />

      <div className="min-h-screen bg-black text-white flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content: Ticket Grid */}
        <div className="flex-1 p-8">
          {/* Search and Sort */}
          <div className="flex justify-between mb-6">
            <input
              type="text"
              placeholder="Search for section, seat, etc."
              className="p-2 rounded-md w-1/3 bg-gray-800 text-white hidden md:block"
            />
            <select className="p-2 bg-gray-800 text-white rounded-md">
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>

          {/* Ticket Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tickets.map((ticket, index) => (
              <TicketCard
                key={index}
                section={ticket.section}
                row={ticket.row}
                seat={ticket.seat}
                price={ticket.price}
                imageUrl={ticket.imageUrl}
                isBid={ticket.isBid}
                bidAmount={ticket.bidAmount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
