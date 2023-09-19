import { Outlet, useLocation } from "react-router-dom";
import Footer from "./templates/FooterTemplate";
import Topbar from "./components/InformationSection";
import Nav from "./components/NavigationBar";
import ErrorFooter from "./components/ErrorFooter";
import { ScrollRestoration } from "react-router-dom";
import "./global.css";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="app">
      <Topbar />
      <Nav />
      <Outlet />
      {location.pathname !== "/404" ? <Footer /> : <ErrorFooter />}
      <ScrollRestoration />
    </div>
  );
}

export default App;
