// Import the relevant components for the homepage.
import InformationSection from "../components/InformationSection";
import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/Hero";
import About from "../templates/About";
import FeaturedHomes from "../templates/FeaturedHomes";
import Subscribe from "../components/Subscribe";
import FeaturedAgents from "../templates/FeaturedAgents";
import AppTemplate from "../templates/AppTemplate";
import FooterTemplate from "../templates/FooterTemplate";

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
      <FeaturedAgents />
      <AppTemplate />
      <FooterTemplate />
    </>
  );
}

export default Home;
