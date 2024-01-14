import { create } from "zustand";

interface BarchartStore {
    numberArray: number[];
  addNumber: (newNumber:number) => void;

};

const randomArrayGenerator = (size:number) => {
    let randomNumbersArray=[];
    for(let i=0;i<size;i++){
        randomNumbersArray.push(Math.floor(Math.random()*9+1))
    }
    return randomNumbersArray;
}


export const useBarChartData = create<BarchartStore>((set) => ({
  numberArray: randomArrayGenerator(4),
  addNumber: (newNumber) => set((state) => ({numberArray:[...state.numberArray,newNumber]})),
}));


