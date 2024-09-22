import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import EventsGrid from "@/components/EventGrid";
import Image from "next/image";
import MerchGrid from "@/components/MerchGrid";
import Footer from "@/components/Footer";


export default function Home() {

  const eventsData = [
    { title: 'FEID', date: 'Oct. 18', location: '7:00 pm | Choliseo', image: '/event1.jpg' },
    { title: 'RAUW ALEJANDRO', date: 'Dec. 3-5', location: '7:00 pm | Choliseo', image: '/event2.jpg' },
    { title: 'WISIN & YANDEL', date: 'Dec. 12-14', location: '7:00 pm | Choliseo', image: '/event3.jpg' },
    { title: 'J BALVIN', date: 'Feb. 12', location: '7:00 pm | Choliseo', image: '/event4.jpg' },
    { title: 'BAD BUNNY', date: 'Mar. 1-4', location: '7:00 pm | Choliseo', image: '/event5.jpg' },
    { title: 'YOUNG MIKO', date: 'Apr. 3-5', location: '7:00 pm | Choliseo', image: '/event6.jpg' },
    { title: 'KAROL G', date: 'Apr. 12-14', location: '7:00 pm | Choliseo', image: '/event7.jpg' },
    { title: 'TRAVIS SCOTT', date: 'Jun. 7', location: '7:00 pm | Choliseo', image: '/event8.jpg' },
  ];

  const merchData = [
    { title: 'Javier Mojica Jersey', date: '$49.99', location: 'Available Now', image: '/merch1.png' },
    { title: 'JJ Barea Jersey', date: '$19.99', location: 'Available Now', image: '/merch2.png' },
    { title: 'Young Miko Hoodie', date: '$29.99', location: 'Available Now', image: '/merch3.png' },
    { title: 'Eladio Carrion Hoodie', date: '$59.99', location: 'Available Now', image: '/merch4.png' },
    { title: 'Tainy Vinil Box', date: '$99.99', location: 'Available Now', image: '/merch5.png' },
    { title: 'Adidas Forum Bad Bunny', date: '$159.99', location: 'Available Now', image: '/merch6.png' },
  ];

  return (

    <div>
      <Navbar />
      <SearchBar />
      <EventsGrid items={eventsData} sectionTitle="Upcoming Events" seeAllLink="/events" />
      <MerchGrid items={merchData} sectionTitle="Merchandise" seeAllLink="/merch" />
      <Footer />
    </div>
  );
}
