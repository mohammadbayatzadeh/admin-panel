import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout.js/Layout";
import RoutesMap from "./routes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Admin Panel ";
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <RoutesMap />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
