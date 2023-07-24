import * as am5 from "@amcharts/amcharts5";
import * as am5wc from "@amcharts/amcharts5/wc";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import { useLayoutEffect } from "react";

function WordChart() {
  useLayoutEffect(() => {
    let root = am5.Root.new("word");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Add series
    // https://www.amcharts.com/docs/v5/charts/word-cloud/
    let series = root.container.children.push(
      am5wc.WordCloud.new(root, {
        categoryField: "tag",
        valueField: "weight",
        maxFontSize: am5.percent(15),
      })
    );

    // Configure labels
    series.labels.template.setAll({
      fontFamily: "Courier New",
    });

    setInterval(function () {
      am5.array.each(series.dataItems, function (dataItem) {
        let value = Math.random() * 65;
        value = value - Math.random() * value;
        dataItem.set("value", value);
        dataItem.set("valueWorking", value);
      });
    }, 5000);

    series.data.setAll([
      { tag: "Skills", weight: 100 },
      { tag: "HTML", weight: Math.random() * 100 },
      { tag: "Reactjs", weight: Math.random() * 100 },
      { tag: "CSS", weight: Math.random() * 100 },
      { tag: "Nextjs", weight: Math.random() * 100 },
      { tag: "TypeScript", weight: Math.random() * 100 },
      { tag: "Axios", weight: Math.random() * 100 },
      { tag: "Figma", weight: Math.random() * 100 },
      { tag: "next-auth", weight: Math.random() * 100 },
      { tag: "scss", weight: Math.random() * 100 },
      { tag: "Redux", weight: Math.random() * 100 },
      { tag: "TypeScript", weight: Math.random() * 100 },
      { tag: "JavaScript", weight: Math.random() * 100 },
      { tag: "HTML", weight: Math.random() * 100 },
      { tag: "Reactjs", weight: Math.random() * 100 },
      { tag: "CSS", weight: Math.random() * 100 },
      { tag: "Nextjs", weight: Math.random() * 100 },
      { tag: "TypeScript", weight: Math.random() * 100 },
      { tag: "Axios", weight: Math.random() * 100 },
      { tag: "Figma", weight: Math.random() * 100 },
      { tag: "next-auth", weight: Math.random() * 100 },
      { tag: "scss", weight: Math.random() * 100 },
      { tag: "Redux", weight: Math.random() * 100 },
      { tag: "TypeScript", weight: Math.random() * 100 },
    ]);

    root.current = root;
    return () => {
      root.dispose();
    };
  }, []);
  return <div id="word" style={{ width: "100%", height: "500px" }}></div>;
}

export default WordChart;
