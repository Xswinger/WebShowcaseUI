import React from 'react'
import OrderInfoComponent from '../ordercomponent/orderInfoComponent/OrderInfoComponent'
import PositionWrapper from '../ordercomponent/positionsWrapper/PositionsWrapperComponent'
import style from './ContentWrapperComponent.module.css'

const ContentWrapperComponent = () => {
    return (
        <div className={style.wrapper}>
            <OrderInfoComponent/>
            <PositionWrapper/>
            <RedirectButton/>
        </div>
    )
}

function RedirectButton() {
    return (
        <div className={style.redirect_button_wrapper}>
            <button className={style.redirect_button}> Оформить заказ </button>
        </div>
    )
}

export default ContentWrapperComponent