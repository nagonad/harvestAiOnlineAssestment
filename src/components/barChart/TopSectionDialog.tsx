import { useState } from "react";
import { cn } from "../../../lib/utils";
import { useBarChartData } from "../../../store/use-barchartData";
interface TopSectionDialogProps {
  toggle: boolean;
  handleClick: () => void;
}

export const TopSectionDialog = ({
  toggle,
  handleClick,
}: TopSectionDialogProps) => {
  const [inputValue, setInputValue] = useState("");
  const { addNumber } = useBarChartData((state) => state);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNumber(+inputValue);
    setInputValue("");
    handleClick();
  };

  return (
    <div
      className={cn(
        "absolute w-[250px] bg-white border-2 shadow-lg z-10 hidden transform translate-x-[-100%] p-4 rounded-lg",
        toggle && "block"
      )}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col gap-y-4">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 block w-full p-2.5"
          />
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-black/70 hover:bg-black/90 text-white py-1 px-6 rounded-md"
              onClick={handleClick}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-400 hover:bg-gray-600 text-white py-1 px-6 rounded-md"
            >
              Ok
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
