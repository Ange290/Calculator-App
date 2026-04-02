import '../App.css';

type ButtonType = {
    label: string;
    type: "number" | "operator" | "action"
    span?: number;
}
 type ButtonProps = {
    onNumber : (value: string) => void;
    onOperator : (value: string) => void;
    onEqual : () => void;
    onClear : () => void;
    onPercentage : () => void;
    onToggleSign  : ()=> void;
}
 
const buttons : ButtonType[] = [
    {label:"AC", type:"action"},
    {label:"+/-", type:"action"},
    {label:"%", type:"action"},
    {label:"÷", type:"operator"},
    {label:"7", type:"number"},
    {label:"8", type:"number"},
    {label:"9", type:"number"},
    {label:"x", type:"operator"},
    {label:"4", type:"number"},
    {label:"5", type:"number"},
    {label:"6", type:"number"},
    {label:"-", type:"operator"},
    {label:"1", type:"number"},
    {label:"2", type:"number"},
    {label:"3", type:"number"},
    {label:"+", type:"operator"},
    {label:"0", type:"number", span: 2},
    {label:".", type:"number"},
    {label:"=", type:"operator"}
];

const Buttons =({onNumber, onOperator, onEqual, onClear, onPercentage, onToggleSign}: ButtonProps) => {   
const HandleClick = (btn: ButtonType) =>{
    if(btn.type === "number"){
        return onNumber(btn.label);
    }
    if(btn.label === "AC") return onClear();
    if(btn.label === "+/-") return onToggleSign();
    if(btn.label === "%") return onPercentage();
    if(btn.label === "=") return onEqual();
    if(btn.type === "operator"){
        return onOperator(btn.label);
    };
    
}

// const baseButtonClass = "bg-gray-200 text-black text-xl p-4 hover:bg-gray-300 border border-gray-500";
// const operatorButtonClass = "bg-orange-500 text-white text-xl p-4 hover:bg-orange-600 border border-gray-500";

  return (
        <> 
            {buttons.map((btn, index) => (
                <button
                    key={index}
                    type="button"
                    onClick={() => HandleClick(btn)}
                    className={`${btn.type === "operator" ? "btn-operator" : "btn"} ${btn.span === 2 ? "col-span-2" : ""}`}
                >
                    {btn.label}
                </button>
            ))}
        </>
    );
}

export default Buttons;