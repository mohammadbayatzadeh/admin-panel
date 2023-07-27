import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/templates/HomePage";
import MapPage from "./components/templates/MapPage";
import ContactPage from "./components/templates/ContactPage";
import ManageItems from "./components/templates/ManageItems";

function RoutesMap() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/manage-items" element={<ManageItems />} />
    </Routes>
  );
}

export default RoutesMap;
