import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Properties from "./pages/propertylist";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Agents from "./pages/Agents";
import "./global.css";
import ErrorPage from "./pages/Errorpage";

const root = createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/Properties" element={<Properties />} />
      <Route path="/Agents" element={<Agents />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
