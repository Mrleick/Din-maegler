import React from "react";
import styled from "styled-components";
import Info from "./components/info";
import Navi from "./components/navigation";
import Hero from "./components/hero";

// Styled-component for the Main container
const Main = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

function App() {
  return (
    <div>
      <Info />
      <Navi />
      <Hero />
      <Main></Main>
    </div>
  );
}

export default App;
