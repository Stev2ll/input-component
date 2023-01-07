import React from "react";
import '../css/Input.css'



function Input({clas,text,labelcolor,label,inputValue, place,value}){

    return(
        <aside >
            <p>{text}</p>
            <label className={labelcolor}>{label}</label>
            <div className="Inputs-container">
                 <input className={clas} type={inputValue} value ={value} placeholder={place} />
            </div>
        </aside>
    )
}



export default Input;