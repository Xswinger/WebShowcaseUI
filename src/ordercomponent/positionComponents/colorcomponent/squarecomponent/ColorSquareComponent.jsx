import React from 'react';

const ColorSquareComponent = ({color, onClick, isSquareSelected}) => {
    const squareStyle = {
        width: '25px',
        height: '25px',
        backgroundColor: color,
        border: isSquareSelected ? '2px solid black' : 'none',
        boxSizing: 'border-box'
    };

    return (
        <div style={squareStyle} onClick={onClick}/>
    );
}

export default ColorSquareComponent;