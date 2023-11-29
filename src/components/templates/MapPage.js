import React, { useEffect } from "react";

//chart
import WorldMap from "../elements/charts/WorldMap";

function MapPage() {
  useEffect(() => {
    document.title = "Map Panel";
  }, []);
  return <WorldMap />;
}

export default MapPage;
