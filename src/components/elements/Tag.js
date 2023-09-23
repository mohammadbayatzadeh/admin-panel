//icons
import { VscWatch } from "react-icons/vsc";

//chart
import { VictoryBar } from "victory";

function Tag({ title }) {
  const data = [
    { quarter: "Jan", earnings: Math.random() * 1000 + 100 },
    { quarter: "Feb", earnings: Math.random() * 1000 + 100 },
    { quarter: "Mar", earnings: Math.random() * 1000 + 100 },
    { quarter: "Apr", earnings: Math.random() * 1000 + 100 },
    { quarter: "Jun", earnings: Math.random() * 1000 + 100 },
  ];
  return (
    <div className="lg:w-1/2 md:w-6/12 w-full mx-2 mb-5 h-30 bg-text-color-secondary text-text-color-primary rounded-xl p-4 transition duration-300 ease-in-out hover:scale-x-105">
      <div className="w-full flex justify-between">
        <div>
          <p className="text-xl">
            {title === "All Earning" && "$"}
            {Math.floor(Math.random() * 100000)}
          </p>
          <p className="text-base">{title}</p>
        </div>
        <div className="w-12 h-12">
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
      <span className="flex w-full h-px bg-text-color-primary my-2.5"></span>
      <p className="flex items-center">
        <VscWatch />
        update : {Math.floor(Math.random() * 12 + 1)}:
        {Math.floor(Math.random() * 60 + 1)} am
      </p>
    </div>
  );
}

export default Tag;
