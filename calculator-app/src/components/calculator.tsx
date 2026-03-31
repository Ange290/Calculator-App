
const Calculator = ()=>{

    return (
        <div className="w-full h-screen flex items-center justify-center bg-slate-950 ml-auto mr-auto">
            <div className="grid grid-cols-4  bg-gray-800p-4 rounded-2xl shadow-lg">
               <div className="col-span-4 bg-gray-500 text-white text-right text-3xl p-4 ">9</div>
               <button className="btn">AC</button>
               <button className="btn">+/-</button>
               <button className="btn">%</button>
               <button className="btn-operator">÷</button>

               <button className="btn">7</button>
                <button className="btn">8</button>
                <button className="btn">9</button>
                <button className="btn-operator">x</button>

                <button className="btn">4</button>
                <button className="btn">5</button>
                <button className="btn">6</button>
                <button className="btn-operator">-</button>

                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn">3</button>
                <button className="btn-operator">+</button>

                <button className="btn col-span-2">0</button>
                <button className="btn">.</button>
                <button className="btn-operator">=</button>
            </div>
        </div>
    )
}
export default Calculator;