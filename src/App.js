import { Outlet } from "react-router-dom";
import Footer from "./templates/FooterTemplate";

function App() {
  return (
    <div className="app">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
