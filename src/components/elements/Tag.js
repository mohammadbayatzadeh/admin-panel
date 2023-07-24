import styles from "./Tag.module.css";
import { VscWatch } from "react-icons/vsc";
import { VictoryBar } from "victory";

function Tag({ number, title }) {
  const data = [
    { quarter: "Jan", earnings: Math.random() * 1000 + 100 },
    { quarter: "Feb", earnings: Math.random() * 1000 + 100 },
    { quarter: "Mar", earnings: Math.random() * 1000 + 100 },
    { quarter: "Apr", earnings: Math.random() * 1000 + 100 },
    { quarter: "Jun", earnings: Math.random() * 1000 + 100 },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>
          <p className={styles.number}>
            {title === "All Earning" && "$"}
            {Math.floor(Math.random() * 100000)}
          </p>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.chart}>
          <VictoryBar
            data={data}
            barWidth={60}
            x="quarter"
            y="earnings"
            style={{
              data: {
                fill: "#ff5656",
              },
            }}
          />
        </div>
      </div>
      <span className={styles.line}></span>
      <p className={styles.update}>
        <VscWatch />
        update : {Math.floor(Math.random() * 12 + 1)}:
        {Math.floor(Math.random() * 60 + 1)} am
      </p>
    </div>
  );
}

export default Tag;
