import { Outlet } from "react-router-dom";
import Footer from "./templates/FooterTemplate";
import Topbar from "./components/InformationSection";
import Nav from "./components/NavigationBar";
import { ScrollRestoration } from "react-router-dom";
import "./global.css";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Nav />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
