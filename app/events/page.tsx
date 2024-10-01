"use client";

import { useRouter } from "next/navigation";
import EventHeader from "@/components/EventHeader";
import NavBar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TicketCard from "@/components/TicketCard";
import Footer from "@/components/Footer";

// Define types for the event data and tickets
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

interface EventInfo {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  status: string;
  availableSeats: number;
  capacity: number;
  venue: string;
  tickets: Ticket[];
}

export default function EventPage() {
  const router = useRouter();

  // State for event information
  // const [eventInfo, setEventInfo] = useState<EventInfo | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  const mockTickets: Ticket[] = [
    {
      id: 1,
      section: "Arena Standing",
      row: "A",
      seat: "10",
      price: 130,
      imageUrl: "/ticket1.jpg",
      isBid: false,
    },
    {
      id: 2,
      section: "Section T14",
      row: "B",
      seat: "15",
      price: 150,
      imageUrl: "/ticket1.jpg",
      isBid: true,
      bidAmount: 145,
    },
    {
      id: 3,
      section: "Section U228",
      row: "C",
      seat: "5",
      price: 95,
      imageUrl: "/ticket1.jpg",
      isBid: false,
    },
    {
      id: 4,
      section: "Section L224",
      row: "D",
      seat: "7",
      price: 100,
      imageUrl: "/ticket1.jpg",
      isBid: true,
      bidAmount: 120,
    },
  ];

  const mockEvent: EventInfo = {
    id: 1,
    title: "Saturno World Tour",
    description:
      "Live from PR's Choliwood, Rauw Alejandro returns to his hometown to deliver an unforgettable experience!",
    imgUrl: "/eventbg1.jpg",
    status: "LIVE",
    availableSeats: 2400,
    capacity: 18500,
    venue: "El Choli",
    tickets: [],
  };

  const handleTicketClick = () => {
    router.push(`/events/ticket`);  // Navigates to /events/ticket?id={ticketId}
  };

  // Fetch event data from the backend

  // useEffect(() => {
  //   if (mockEvent.id) {
  //     fetch(`/event/${mockEvent.id}`)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch event data");
  //         }
  //         return response.json();
  //       })
  //       .then((data: EventInfo) => {
  //         setEventInfo(data);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         setError(err.message);
  //         setLoading(false);
  //       });
  //   }
  // }, [mockEvent.id]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error loading event details: {error}</div>;

  return (
    <div>
      {/* Navbar at the top */}
      <NavBar />

      {/* Event Header */}
      {mockEvent && (
        <EventHeader
          title={mockEvent.title}
          description={mockEvent.description}
          imgUrl={mockEvent.imgUrl}
          liveStatus={mockEvent.status}
          availableSeats={mockEvent.availableSeats}
          capacity={mockEvent.capacity}
          venue={mockEvent.venue}
        />
      )}

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
            {mockTickets?.map((ticket, index) => (
              <div
              key={ticket.id}
              className="cursor-pointer"
              onClick={() => handleTicketClick()}  // Navigates to ticket detail page on click
            >
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
