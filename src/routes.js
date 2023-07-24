import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/templates/HomePage";
import MapPage from "./components/templates/MapPage";
import Me from "./components/templates/Me";

function RoutesMap() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/me" element={<Me />} />
    </Routes>
  );
}

export default RoutesMap;
