import { useBarChartData } from "../../../store/use-barchartData";

export const GraphContent = () => {
  const { numberArray } = useBarChartData((state) => state);
  let maxValue = numberArray.reduce((p, v) => (p < v ? v : p));
  return (
    <div className="h-full absolute w-full bottom-0 left-0">
      <div className="h-full flex justify-around items-end">
        {numberArray.map((value, index) => (
          <div
            key={index}
            className="border-2 w-[100px] bg-cyan-600 rounded"
            style={{ height: `${(value / maxValue) * 100}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};
