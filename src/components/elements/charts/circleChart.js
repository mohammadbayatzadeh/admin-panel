import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useLayoutEffect } from "react";

function CircleChart() {
  useLayoutEffect(() => {
    var root = am5.Root.new("chartdivv");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
      })
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
      })
    );

    series.labels.template.setAll({
      textType: "circular",
      centerX: 0,
      centerY: 0,
      
    });

    series.data.setAll([
      { value: Math.floor(Math.random() * 10 + 5) },
      { value: Math.floor(Math.random() * 10 + 5) },
      { value: Math.floor(Math.random() * 10 + 5) },
      { value: Math.floor(Math.random() * 10 + 5) },
      { value: Math.floor(Math.random() * 10 + 5) },
      { value: Math.floor(Math.random() * 10 + 5) },
    ]);

    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15,
      })
    );

    legend.data.setAll(series.dataItems);

    series.appear(1000, 100);
    root.current = root;
    return () => {
      root.dispose();
    };
  }, []);
  return <div id="chartdivv" style={{ width: "100%", height: "500px" }}></div>;
}

export default CircleChart;
