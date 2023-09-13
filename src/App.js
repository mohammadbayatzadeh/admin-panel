import { useEffect } from "react";

//layout
import Layout from "./components/layout.js/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

//routes
import { BrowserRouter } from "react-router-dom";
import RoutesMap from "./routes";

//redux
import Store from "./app/store";
import { Provider } from "react-redux";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    document.title = "Admin Panel ";
  }, []);

  return (
    <Provider store={Store}>
      <Layout>
        <BrowserRouter>
          <RoutesMap />
        </BrowserRouter>
      </Layout>
    </Provider>
  );
}

export default App;
