import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createNumbersArrayForLeftBar = (data: number[]) => {
  let leftBarIndexes=[];

  let maxValue = data.reduce((p, v) => (p < v ? v : p));

  //digits of the number
  let digit = Math.floor(Math.log10(maxValue))

  //maximum value of the chart
  let nextIntervalLimit=Math.ceil(maxValue/Math.pow(10,digit))


  //adjusting maximum value
  while(true){
    if(nextIntervalLimit%4===0){
      break
    }
    nextIntervalLimit++
  }

  // more soft value for maximum
  nextIntervalLimit = nextIntervalLimit * Math.pow(10,digit)


  //getting the half of the maximum value of the chart if it's way too big compared the maximum value of array
  while(maxValue<=nextIntervalLimit/2){
    nextIntervalLimit = nextIntervalLimit/2
  }

  //creating the values for vertical axis
 for(let i =0;i<=nextIntervalLimit;i=i+nextIntervalLimit/4){
  leftBarIndexes.push(i)
 }

 return leftBarIndexes.reverse()
};
