import React from 'react';

const ColorSquareComponent = ({color, onClick, isSquareSelected}) => {
    const squareStyle = {
        width: '30px',
        height: '30px',
        backgroundImage: 'url(https://leshainc.ru/' + color + ')',
        border: isSquareSelected ? '3px solid red' : 'none'
    };

    return (
        <div style={squareStyle} onClick={onClick}/>
    );
}

export default ColorSquareComponent;