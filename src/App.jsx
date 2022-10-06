import React from "react";
import "boxicons";

import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";

import { Home, NoFound404 } from "./pages";
import { Navbar } from "./components";
import { navLinks } from "./constants";

const App = () => {
    
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<ContentPage />} />
        <Route path="/:navmenu" element={<ContentPage />} />

        <Route path="*" element={<NoFound404 />} />
      </Routes>
    </div>
  );
};

const ContentPage = () => {

  var { navmenu } = useParams();

  if (navLinks[navmenu]) {
    return navLinks[navmenu].component;
  } else {
    return <NoFound404 />;
  }
};

export default App;
