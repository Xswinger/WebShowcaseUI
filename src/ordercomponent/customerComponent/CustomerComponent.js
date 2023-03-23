import React from "react";
import style from "./CustomerComponent.module.css";

function CustomerTitle() {
    return (
        <div className={style.title}>
            <span>Заказчик</span>
        </div>
    )
}

const customerComponent = () => {
    return (
        <div className={style.wrapper}>
            <CustomerTitle/>
            <br/>
            <input type={'text'} className={style.text}></input>
        </div>
    );
}

export default customerComponent;