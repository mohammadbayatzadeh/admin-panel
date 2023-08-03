import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

function ChangeChart() {
  const randValues = () => {
    const values = [];
    for (let i = 0; i < 30; i++) {
      values.push(Math.random() * 1000);
    }
    return values;
  };
  return (
    <Sparklines data={randValues()} svgWidth={100} svgHeight={40} margin={5}>
      <SparklinesReferenceLine type="mean" />
      <SparklinesLine color="#6a7efc"  />
    </Sparklines>
  );
}

export default ChangeChart;
