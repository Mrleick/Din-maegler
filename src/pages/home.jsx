// Import the relevant components for the homepage.
import HeroSection from "../components/Hero";
import About from "../templates/About";
import FeaturedHomes from "../templates/FeaturedHomes";
import Subscribe from "../components/Subscribe";
import FeaturedAgents from "../templates/FeaturedAgents";
import AppTemplate from "../templates/AppTemplate";
// Define the App component.
function Home() {
  // Return my components along with data.
  return (
    <>
      <HeroSection />
      <About />
      <FeaturedHomes />
      <Subscribe />
      <FeaturedAgents />
      <AppTemplate />
    </>
  );
}

export default Home;
