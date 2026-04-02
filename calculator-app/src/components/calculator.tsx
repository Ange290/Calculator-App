import { useState } from "react";
import Buttons from "./buttons";
import '../App.css'
const Calculator = ()=>{
    const [current, setCurrent] = useState("");
    const [previous, setPrevious] = useState("");
    const [operator, setOperator] = useState("");
    
    const handleButtonClick = (value : string) =>{
       if(current === "0"){
        setCurrent(value);
       }else{
        setCurrent(current + value);
       }  

    }
    const handleOperatorClick = (op: string) =>{
        if(current === "") return;
        setOperator(op);
        setPrevious(current);
        setCurrent("");
    }
    const handlePercentage =()=>{
        const curr = parseFloat(current);
        const prev = parseFloat(previous);
        if(operator === "+" || operator === "-"){
            setCurrent((prev * curr / 100).toString());
        }else if(operator === "x" || operator === "÷"){
            setCurrent((curr / 100).toString());
        }else{
            setCurrent((curr / 100).toString());
        }
    }

const operatorMap : {[key: string]: (a: number, b: number) => number} = {
    "+": (a,b) => a +b ,
    "-" : (a, b) => a- b,
    "x": (a, b) => a * b,
    "÷": (a, b) => a / b
}

    const calculate = () =>{
        if(!operator || !previous || !current) return;
        const prev = parseFloat(previous);
        const curr = parseFloat(current);
      
        
        setCurrent(operatorMap[operator](prev, curr).toString());
        setPrevious("");
        setOperator("");

    }
   const handleClear = () =>{
    setCurrent("");
    setPrevious("");
    setOperator("");
   }




    return (
        <div className="w-full h-screen flex items-center justify-center bg-slate-950">
            <div className="grid grid-cols-4  ">
               <div className="col-span-4 bg-gray-500 text-white text-right text-3xl p-4 ">{current || previous || 0}</div>
               <Buttons
                onNumber={handleButtonClick}
                onOperator={handleOperatorClick}
                onEqual={calculate}
                onClear={handleClear}
                onPercentage={handlePercentage}
               />
            </div>
        </div>
    )
}
export default Calculator;