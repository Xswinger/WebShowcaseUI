import React from 'react';

const PlusButtonComponent = ({ onClick }) => {
    return (
        <button
            style={{
                backgroundColor: 'green',
                color: 'white',
                borderRadius: '5px',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.2em',
            }}
            onClick={onClick}
        >
            Добавить
        </button>
    );
}

export default PlusButtonComponent;
