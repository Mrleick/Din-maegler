// Import the axios library to send HTTP requests.
import axios from "axios";

// Import the relevant components for the homepage.
import InformationSection from "../components/InformationSection";
import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/Hero";
import OmOs from "../components/OmOs";
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
      <OmOs />
      <FeaturedHomes />
      <Subscribe />
    </>
  );
}

// Define the HomePageData export, which is used to fetch the data from the server.
export const HomePageData = async ({ params }) => {
  // Send an HTTP GET request to the server.
  const response = await axios.get("https://dinmaegler.onrender.com/homes");

  // Status code of the response.
  if (response.status === 200) {
    // The request was successful. Return the data from the response.
    return response.data;
  } else {
    // The request failed. Throw an error with the status text from the response.
    throw new Error(response.statusText);
  }
};

export default Home;
