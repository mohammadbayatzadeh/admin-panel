import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

//components
import Loading from "./components/modules/Loading";

//templates
const HomePage = lazy(() => import("./components/templates/HomePage"));
const MapPage = lazy(() => import("./components/templates/MapPage"));
const ContactPage = lazy(() => import("./components/templates/ContactPage"));
const ManageItems = lazy(() => import("./components/templates/ManageItems"));

function RoutesMap() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/manage-items" element={<ManageItems />} />
      </Routes>
    </Suspense>
  );
}

export default RoutesMap;
