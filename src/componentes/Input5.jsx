import React from "react";
import '../css/Input.css'


function Input({clas,text,labelcolor,label,label2,inputValue, place,value,row}){

    return(
        <aside>
            <p>{text}</p>
            <label className={labelcolor}>{label}</label>
            <div className="Inputs-container">
                 <input rows={row} className={clas} cols="40"  type={inputValue} placeholder={place} value= {value} />
            </div>
            <label className={labelcolor}>{label2}</label>
        </aside>
    )
}



export default Input;