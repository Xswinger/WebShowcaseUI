import React, {useState} from 'react';
import style from './OrderInfoComponent.module.css'
import InfoComponent from './InfoComponent/InfoComponent'

let infoTitles = {
    customerTitle: "Заказчик",
    orderNumberTitle: "Номер заказа"
}

const OrderInfoComponent = (props) => {

    function handleValue() {
        props.onChange()
    }

    return (
        <div className={style.wrapper}>
            <InfoComponent header={infoTitles.customerTitle} onChange={handleValue}/>
            <InfoComponent header={infoTitles.orderNumberTitle} onChange={handleValue}/>
        </div>
    )
}

export default OrderInfoComponent;