import { useBarChartData } from "../../../store/use-barchartData";

export const BottomIndexes = () => {
  const { numberArray } = useBarChartData((state) => state);
  return (
    <div className="border-t-2 flex justify-around">
      {numberArray.map((_, index) => (
        <div key={index}>{index + 1}</div>
      ))}
    </div>
  );
};
