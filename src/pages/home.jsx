import axios from "axios";
import { useLoaderData } from "react-router-dom";

import InformationSection from "../components/InformationSection";
import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/HeroSection";
import OmOs from "../components/OmOS";
import Udvalgte from "../templates/Udvalgte";

function App() {
  const homeData = useLoaderData();
  console.log("Fetched data for Udvalgte component:", homeData);

  return (
    <>
      <InformationSection />
      <NavigationBar />
      <HeroSection />
      <OmOs />
      <Udvalgte data={homeData} />
    </>
  );
}

export const HomePageData = async ({ params }) => {
  const response = await axios.get("https://dinmaegler.onrender.com/homes");

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export default App;
