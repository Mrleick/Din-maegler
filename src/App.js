import { Outlet } from "react-router-dom";
import Footer from "./templates/FooterTemplate";
import Topbar from "./components/InformationSection";
import Nav from "./components/NavigationBar";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
