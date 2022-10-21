import React, { useState } from "react";
import "boxicons";

import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";

import { Home, Products, AboutUs, ContactUs ,NoFound404 } from "./pages";
import { Navbar } from "./components";
import { navLinks } from "./constants";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/contactanos" element={<ContactUs />} />

        <Route path="*" element={<NoFound404 />} />
      </Routes>
    </div>
  );
};

export default App;
