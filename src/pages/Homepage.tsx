import EventCarousel from '../components/EventCarousel';
import InfoCards from '../components/InfoCards';
import About from '../components/About';
import AthletesList from '../components/AthleteList';

function HomePage() {
  return (
    <>
      <EventCarousel />
      <InfoCards />
      <About />
      <AthletesList />
    </>
  );
}

export default HomePage;