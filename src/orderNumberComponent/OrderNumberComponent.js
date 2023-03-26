import React from "react";
import style from "./OrderNumberComponent.module.css";

function OrderNumberTitle() {
    return (
        <div className={style.title}>
            <span>Номер заказа</span>
        </div>
    )
}

const orderNumberComponent = () => {
    return (
        <div className={style.wrapper}>
            <OrderNumberTitle/>
            <br/>
            <input type={'text'} className={style.text}></input>
        </div>
    );
}

export default orderNumberComponent;