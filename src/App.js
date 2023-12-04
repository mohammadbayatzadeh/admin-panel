//layout
import Layout from "./components/layout.js/Layout";

//routes
import { BrowserRouter } from "react-router-dom";
import RoutesMap from "./routes";

//redux
import Store from "./app/store";
import { Provider } from "react-redux";

function App() {
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
