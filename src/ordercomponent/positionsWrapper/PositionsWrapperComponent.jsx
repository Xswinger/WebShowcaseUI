import React from "react";
import style from "./PositionsWrapperComponent.module.css"
import PositionComponent from '../PositionComponent'

const positionsWrapper = () => {
    return (
        <div className={style.wrapper}>
            <PositionComponent/>
            <PositionComponent/>
        </div>
    );
}

export default positionsWrapper;