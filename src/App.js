import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout.js/Layout";
import RoutesMap from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RoutesMap />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
