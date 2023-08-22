import React from "react";
import InformationSection from "../components/InformationSection";
import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/HeroSection";
import OmOs from "../components/OmOS";
import Udvalgte from "../components/Udvalgte";

function App() {
  return (
    <div>
      <InformationSection />
      <NavigationBar />
      <HeroSection />
      <OmOs />
      <Udvalgte />
    </div>
  );
}

export default App;
