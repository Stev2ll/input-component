import React from "react";
import '../css/Input.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Input({clas,text,labelcolor,label,label2,inputValue, place,icon}){

    return(
        <aside>
            <p>{text}</p>
            <label className={labelcolor}>{label}</label>
            <div className="Inputs-container">
                 <input className={clas} type={inputValue} placeholder={place} />
                 <LocalPhoneIcon className="LocalPhoneIcon"/>
            </div>
            <label className={labelcolor}>{label2}</label>
        </aside>
    )
}



export default Input;