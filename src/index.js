import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { UserProvider } from "./Authentication/UserAuth";
import App from "./App";
import Home from "./pages/home";
import Properties from "./pages/propertylist";
import Agents from "./pages/Agents";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

import "./global.css";
import ErrorPage from "./pages/Errorpage";

const root = createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/boliger" element={<Properties />} />
      <Route path="/mæglere" element={<Agents />} />
      <Route path="/favoritter" element={<Favorites />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/opret" element={<Register />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
