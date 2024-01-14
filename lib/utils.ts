import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createNumbersArrayForLeftBar = (data: number[]) => {
  let leftBarIndexes=[];

  let maxValue = data.reduce((p, v) => (p < v ? v : p));
 
  let integerNumber = Math.floor(maxValue);

  let digits = integerNumber.toString().length;
  let ending = ["", "0", "00", "k", "0k", "00k", "m", "0m", "00m", "b"];

  maxValue = maxValue / Math.pow(10, digits - 1);

  for (let i = 0; i < maxValue; i++) {
    if(i===0){
      leftBarIndexes.push(0)
      continue
    }
    leftBarIndexes.push(i + ending[digits - 1]);
  }
  console.log(data)
  return leftBarIndexes.reverse();
};
