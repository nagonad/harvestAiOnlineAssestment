import { createNumbersArrayForLeftBar } from "../../../lib/utils";
import { useBarChartData } from "../../../store/use-barchartData";

export const GraphContent = () => {
  const { numberArray } = useBarChartData((state) => state);

  let maxValue = createNumbersArrayForLeftBar(numberArray)[0];

  return (
    <div className="h-full absolute w-full bottom-0 left-0">
      <div className="h-full flex justify-around items-end">
        {numberArray.map((value, index) => (
          <div
            key={index}
            className="border-2 w-[30px] md:w-[50px] lg:w-[100px] bg-cyan-600 rounded"
            style={{ height: `${(value / maxValue) * 100}%` }} //bar height proportional to max value
          ></div>
        ))}
      </div>
    </div>
  );
};
