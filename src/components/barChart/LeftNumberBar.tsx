import { createNumbersArrayForLeftBar } from "../../../lib/utils";
import { useBarChartData } from "../../../store/use-barchartData";

export const LeftNumberBar = () => {
  const { numberArray } = useBarChartData((state) => state);

  //costum function to populate numbers for left side of the chart
  let leftSideIndexes = createNumbersArrayForLeftBar(numberArray);

  return (
    <div className="h-full flex flex-col justify-between">
      {leftSideIndexes.map((value, index) => (
        <div key={index} className="flex gap-x-4">
          <p>{value}</p>
          <div className="flex-1">
            <hr className="border-t-2 border-dashed" />
          </div>
        </div>
      ))}
    </div>
  );
};
