import React from "react";
import style from "./InfoComponent.module.css";

function CustomerTitle(props) {
    return (
        <div className={style.title}>
            <span>{props.title}</span>
        </div>
    )
}

const infoComponent = (props) => {
    return (
        <div className={style.wrapper}>
            <CustomerTitle title={props.header}/>
            <br/>
            <input type={'text'} className={style.text}></input>
        </div>
    );
}

export default infoComponent;