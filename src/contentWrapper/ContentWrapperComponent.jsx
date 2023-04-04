import React from 'react'
import OrderInfoComponent from '../ordercomponent/orderInfoComponent/OrderInfoComponent'
import PositionWrapper from '../ordercomponent/positionsWrapper/PositionsWrapperComponent'
import style from './ContentWrapperComponent.module.css'

const ContentWrapperComponent = () => {
    return (
        <div className={style.wrapper}>
            <OrderInfoComponent/>
            <PositionWrapper/>
        </div>
    )
}

export default ContentWrapperComponent