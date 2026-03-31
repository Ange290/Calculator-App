import { useState } from "react";
const Calculator = ()=>{
    const [display, setDisplay] = useState("0");
    const handleButtonClick = (value : string) =>{
        setDisplay(value);
    }






    return (
        <div className="w-full h-screen flex items-center justify-center bg-slate-950 ml-auto mr-auto">
            <div className="grid grid-cols-4  bg-gray-800p-4 rounded-2xl shadow-lg">
               <div className="col-span-4 bg-gray-500 text-white text-right text-3xl p-4 ">{display}</div>
               <button className="btn" onClick={() => handleButtonClick("0")}>AC</button>
               <button className="btn" onClick={() => handleButtonClick("+/-")}>+/-</button>
               <button className="btn" onClick={() => handleButtonClick("%")}>%</button>
               <button className="btn-operator" onClick={() => handleButtonClick("÷")}>÷</button>

               <button className="btn" onClick={() => handleButtonClick("7")}>7</button>
                <button className="btn" onClick={() => handleButtonClick("8")}>8</button>
                <button className="btn" onClick={() => handleButtonClick("9")}>9</button>
                <button className="btn-operator" onClick={() => handleButtonClick("x")}>x</button>

                <button className="btn" onClick={()=> handleButtonClick("4")}>4</button>
                <button className="btn" onClick={() => handleButtonClick("5")}>5</button>
                <button className="btn" onClick={() => handleButtonClick("6")}>6</button>
                <button className="btn-operator" onClick={() => handleButtonClick("-")}>-</button>

                <button className="btn" onClick={() => handleButtonClick("1")}>1</button>
                <button className="btn" onClick={() => handleButtonClick("2")}>2</button>
                <button className="btn" onClick={() => handleButtonClick("3")}>3</button>
                <button className="btn-operator" onClick={() => handleButtonClick("+")}>+</button>

                <button className="btn col-span-2" onClick={() => handleButtonClick("0")}>0</button>
                <button className="btn" onClick={() => handleButtonClick(".")}>.</button>
                <button className="btn-operator" onClick={() => handleButtonClick("=")}>=</button>
            </div>
        </div>
    )
}
export default Calculator;