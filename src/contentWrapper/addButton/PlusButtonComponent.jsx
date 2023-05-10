import React from 'react';

const PlusButtonComponent = ({ onClick }) => {
    return (
        <button className="button is-success" style={{float: 'right'}} onClick={onClick}>Добавить</button>
    );
}

export default PlusButtonComponent;
