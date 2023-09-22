//charts
import LineChart from "../elements/charts/lineChart";
import CircleChart from "../elements/charts/circleChart";

function SaleAnal() {
  return (
    <div class="w-full flex h-max flex-wrap lg:flex-nowrap justify-between items-start">
      <div class="lg:w-2/3 w-full h-[600px] mx-2 mb-5  rounded-lg bg-text-color-secondary text-text-color-primary p-4">
        <p class="font-bold">Sales Analytics</p>
        <p>
          For more details about usage, please refer{" "}
          <a href="/#" class="text-text-color-tertiary no-underline">
            amCharts{" "}
          </a>
          licences.
        </p>
        <LineChart />
      </div>
      <div class="lg:w-1/3 w-full h-[600px] mx-2 mb-5 rounded-lg bg-text-color-secondary text-text-color-primary p-4 flex flex-col items-center">
        <p>Project Risk</p>
        <CircleChart />
        <a href="/#" class="text-text-color-tertiary no-underline">
          Change your risk
        </a>
        <span class="flex w-full h-px bg-text-color-primary my-2.5"></span>
        <div class="w-full flex justify-between">
          <div class="w-1/2 p-2.5 text-center">
            <p>Nr</p>
            <p>AWS 2544</p>
          </div>
          <span class="flex w-px h-full bg-text-color-primary"></span>

          <div class="w-1/2 p-2.5 text-center">
            <p>Created</p>
            <p>30th Step</p>
          </div>
        </div>
        <button class="w-full p-4 bg-text-color-tertiary text-text-color-secondary text-base outline-none border-none mt-4 rounded-b-lg cursor:pointer ">
          Download report
        </button>
      </div>
    </div>
  );
}

export default SaleAnal;
