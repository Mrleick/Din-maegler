import React from "react";
import styled from "styled-components";
import Info from "./components/info";
import Navi from "./components/navigation";

// Styled-component for the Main container
const Main = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`;

function App() {
  return (
    <div>
      <Info />
      <Main>
        <Navi />
      </Main>
    </div>
  );
}

export default App;
