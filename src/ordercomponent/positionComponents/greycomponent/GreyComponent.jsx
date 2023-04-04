import React from 'react';
import style from './GreyComponent.module.css'

const GreyComponent = ({ children }) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
};

export default GreyComponent;
