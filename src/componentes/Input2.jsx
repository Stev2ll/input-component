import React from "react";
import '../css/Input.css'


function Input({typeaside,clas,text,labelcolor,label,label2,inputValue, place}){

    return(
        <aside className={typeaside}>
            <p>{text}</p>
            <label className={labelcolor}>{label}</label>
            <div className="Inputs-container">
                 <input className={clas} type={inputValue} placeholder={place} />
            </div>
            <label className={labelcolor}>{label2}</label>
        </aside>
    )
}



export default Input;