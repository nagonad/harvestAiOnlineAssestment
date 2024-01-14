import { useState } from "react";
import { BottomIndexes } from "./BottomIndexes";
import { GraphContent } from "./GraphContent";
import { LeftNumberBar } from "./LeftNumberBar";
import { TopSection } from "./TopSection";

export const BarChart = () => {
  const [displayChart, setDisplayChart] = useState<boolean>(false);

  return (
    <div>
      {displayChart ? (
        <div className="w-auto h-[300px] flex flex-col bg-white shadow-md gap-y-2 p-4">
          <TopSection />
          <div className="h-full flex flex-col">
            <div className="relative flex-1">
              <LeftNumberBar />
              <GraphContent />
            </div>
            <BottomIndexes />
          </div>
        </div>
      ) : (
        <div className="flex h-screen items-center justify-evenly">
          <button
            onClick={() => {
              setDisplayChart(true);
            }}
            className="bg-cyan-700 py-2 px-4 rounded-md text-white hover:bg-cyan-700/75"
          >
            Generate Chart
          </button>
        </div>
      )}
    </div>
  );
};
