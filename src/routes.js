import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

//components
import Loading from "./components/modules/Loading";

//templates
const HomePage = lazy(() => import("./components/templates/pages/HomePage"));
const MapPage = lazy(() => import("./components/templates/pages/MapPage"));
const ContactPage = lazy(() =>
  import("./components/templates/pages/ContactPage")
);
const ManageItems = lazy(() =>
  import("./components/templates/pages/ManageItems")
);
const LoginPage = lazy(() => import("./components/templates/auth/LoginPage"));
const RegisterPage = lazy(() =>
  import("./components/templates/auth/RegisterPage")
);
const Page404 = lazy(() => import("./components/templates/Page404"));

function RoutesMap() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/manage-items" element={<ManageItems />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
}

export default RoutesMap;
