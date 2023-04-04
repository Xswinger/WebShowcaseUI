import React from 'react';
import style from './OrderInfoComponent.module.css'
import InfoComponent from './InfoComponent/InfoComponent'

let infoTitles = {
    customerTitle: "Заказчик",
    orderNumberTitle: "Номер заказа"
}

const OrderInfoComponent = () => {
    return (
        <div className={style.wrapper}>
            <InfoComponent header={infoTitles.customerTitle}/>
            <InfoComponent header={infoTitles.orderNumberTitle}/>
        </div>
    )
}

export default OrderInfoComponent;