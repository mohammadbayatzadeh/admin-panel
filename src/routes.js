import React from "react";
import { Route, Routes, redirect } from "react-router-dom";
import HomePage from "./components/templates/HomePage";
import MapPage from "./components/templates/MapPage";

function RoutesMap() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  );
}

export default RoutesMap;
