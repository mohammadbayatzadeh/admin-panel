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
    <div
      data-aos="fade-up"
      data-aos-delay={200}
      class="w-1/4 mx-2 mb-5 h-30 bg-text-color-secondary text-text-color-primary rounded-xl p-4 transition duration-300 ease-in-out hover:scale-x-105"
    >
      <div class="w-full flex justify-between">
        <div>
          <p class="text-xl">
            {title === "All Earning" && "$"}
            {Math.floor(Math.random() * 100000)}
          </p>
          <p class="text-base">{title}</p>
        </div>
        <div class="w-12 h-12">
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
      <span class="flex w-full h-px bg-text-color-primary my-2.5"></span>
      <p class="flex items-center">
        <VscWatch />
        update : {Math.floor(Math.random() * 12 + 1)}:
        {Math.floor(Math.random() * 60 + 1)} am
      </p>
    </div>
  );
}

export default Tag;
