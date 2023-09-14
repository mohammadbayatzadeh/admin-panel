//styles
import styles from "./SaleAnal.module.css";
import Slide from "react-reveal/Slide";

//charts
import LineChart from "../elements/charts/lineChart";
import CircleChart from "../elements/charts/circleChart";

function SaleAnal() {
  return (
    <Slide bottom cascade>
      <div className={styles.container}>
        <div className={styles.analytic}>
          <p className={styles.title}>Sales Analytics</p>
          <p className={styles.subTitle}>
            For more details about usage, please refer{" "}
            <a href="/#">amCharts </a> licences.
          </p>
          <LineChart />
        </div>
        <div className={styles.cirChart}>
          <p>Project Risk</p>
          <CircleChart />
          <a href="/#">Change your risk</a>
          <span className={styles.line}></span>
          <div className={styles.row}>
            <div style={{ width: "50%", padding: "10px", textAlign: "center" }}>
              <p>Nr</p>
              <p>AWS 2544</p>
            </div>
            <span className={styles.horLine}></span>

            <div style={{ width: "50%", padding: "10px", textAlign: "center" }}>
              <p>Created</p>
              <p>30th Step</p>
            </div>
          </div>
          <button>Download report</button>
        </div>
      </div>
    </Slide>
  );
}

export default SaleAnal;
