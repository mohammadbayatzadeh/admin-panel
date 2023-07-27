import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout.js/Layout";
import RoutesMap from "./routes";
import { useEffect } from "react";
import { Provider } from "react-redux";
import Store from "./app/store";

function App() {
  useEffect(() => {
    document.title = "Admin Panel ";
  }, []);

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Layout>
          <RoutesMap />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
