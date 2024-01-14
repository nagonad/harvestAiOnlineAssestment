import { useState } from "react";
import { TopSectionDialog } from "./TopSectionDialog";

export const TopSection = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex justify-between">
      <h1 className="text-cyan-700 font-bold text-lg">Bar Chart</h1>
      <div className="relative">
        <button
          onClick={handleClick}
          className="p-1 px-3 rounded text-white bg-cyan-700"
        >
          Add Number
        </button>
        <TopSectionDialog toggle={toggle} handleClick={handleClick} />
      </div>
    </div>
  );
};
