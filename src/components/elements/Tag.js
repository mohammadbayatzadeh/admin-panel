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
          <p className={styles.number}>{number}</p>
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
                fill: "#494953",
              },
            }}
          />
        </div>
      </div>
      <span className={styles.line}></span>
      <p className={styles.update}>
        <VscWatch />
        update : 2:15 am
      </p>
    </div>
  );
}

export default Tag;
