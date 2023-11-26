import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Daftar from "./Route/Daftar/Daftar.jsx";
import Pesan from "./Route/Pesan/Pesan.jsx";
import Kirim from "./Route/Kirim/Kirim.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Daftar />,
  },
  {
    path: "/pesan",
    element: <Pesan />,
  },
  {
    path: "/pesan/:id",
    element: <Kirim />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
