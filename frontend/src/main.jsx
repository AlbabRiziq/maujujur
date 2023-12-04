import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Daftar from "./Route/Daftar/Daftar.jsx";
import Pesan from "./Route/Pesan/Pesan.jsx";
import Kirim from "./Route/Kirim/Kirim.jsx";
import ContextData from "./Context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextData.Provider value={{ user: null }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Daftar />} />
          <Route path="/pesan" element={<Pesan />} />
          <Route path="/pesan/:id" element={<Kirim />} />
        </Routes>
      </BrowserRouter>
    </ContextData.Provider>
  </React.StrictMode>
);
