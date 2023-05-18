import React from 'react';
import style from './GreyComponent.module.css'

const GreyComponent = ({ children }) => {
    return (
        <div className="column" style={{borderRadius: "10px", textAlign: "center", padding: "5px",
            margin: "1%", backgroundColor: "#A9A9A9"}}>
            {children}
        </div>
    );
};

export default GreyComponent;
