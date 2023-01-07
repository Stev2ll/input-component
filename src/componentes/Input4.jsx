import React from "react";
import '../css/Input.css'
import LockIcon from '@mui/icons-material/Lock';

function Input({clas,text,labelcolor,label,label2,inputValue, place,icon}){

    return(
        <aside>
            <p>{text}</p>
            <label className={labelcolor}>{label}</label>
            <div className="Inputs-container">
                 <input className={clas} type={inputValue} placeholder={place} />
                 <LockIcon className="LockIcon"/>
            </div>
            <label className={labelcolor}>{label2}</label>
        </aside>
    )
}



export default Input;