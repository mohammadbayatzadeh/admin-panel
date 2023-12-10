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
    <BrowserRouter>
      <Provider store={Store}>
        <Layout>
          <RoutesMap />
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
