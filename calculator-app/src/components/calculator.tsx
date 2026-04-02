import { useState } from "react";
const Calculator = ()=>{
    const [current, setCurrent] = useState("");
    const [previous, setPrevious] = useState("");
    const [operator, setOperator] = useState("");
    
    const handleButtonClick = (value : string) =>{
       if(value === "0"){
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
        <div className="w-full h-screen flex items-center justify-center bg-slate-950 ml-auto mr-auto">
            <div className="grid grid-cols-4  bg-gray-800p-4 rounded-2xl shadow-lg">
               <div className="col-span-4 bg-gray-500 text-white text-right text-3xl p-4 ">{current || previous || 0}</div>
               <button className="btn" onClick={handleClear}>AC</button>
               <button className="btn" onClick={() => handleOperatorClick("+/-")}>+/-</button>
               <button className="btn" onClick={() => handlePercentage()}>%</button>
               <button className="btn-operator" onClick={() => handleOperatorClick("÷")}>÷</button>

               <button className="btn" onClick={() => handleButtonClick("7")}>7</button>
                <button className="btn" onClick={() => handleButtonClick("8")}>8</button>
                <button className="btn" onClick={() => handleButtonClick("9")}>9</button>
                <button className="btn-operator" onClick={() => handleOperatorClick("x")}>x</button>

                <button className="btn" onClick={()=> handleButtonClick("4")}>4</button>
                <button className="btn" onClick={() => handleButtonClick("5")}>5</button>
                <button className="btn" onClick={() => handleButtonClick("6")}>6</button>
                <button className="btn-operator" onClick={() => handleOperatorClick("-")}>-</button>

                <button className="btn" onClick={() => handleButtonClick("1")}>1</button>
                <button className="btn" onClick={() => handleButtonClick("2")}>2</button>
                <button className="btn" onClick={() => handleButtonClick("3")}>3</button>
                <button className="btn-operator" onClick={() => handleOperatorClick("+")}>+</button>

                <button className="btn col-span-2" onClick={() => handleButtonClick("0")}>0</button>
                <button className="btn" onClick={() => handleButtonClick(".")}>.</button>
                <button className="btn-operator" onClick={() => calculate()}>=</button>
            </div>
        </div>
    )
}
export default Calculator;