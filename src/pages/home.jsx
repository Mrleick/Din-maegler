// Import the relevant components for the homepage.
import InformationSection from "../components/InformationSection";
import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/Hero";
import About from "../components/About";
import FeaturedHomes from "../templates/FeaturedHomes";
import Subscribe from "../components/Subscribe";

// Define the App component.
function Home() {
  // Return my components along with data.
  return (
    <>
      <InformationSection />
      <NavigationBar />
      <HeroSection />
      <About />
      <FeaturedHomes />
      <Subscribe />
    </>
  );
}


export default Home;
