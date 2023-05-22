import React from 'react';

const PlusButtonComponent = ({ onClick }) => {
    const plusButtonStyle = {
        float: 'right',
        bottom: '-40px'
    }
    return (
        <button className="button is-success" style={plusButtonStyle} onClick={onClick}>Добавить</button>
    );
}

export default PlusButtonComponent;
