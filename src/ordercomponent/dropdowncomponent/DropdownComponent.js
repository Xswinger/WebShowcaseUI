import React, {useState} from 'react';
import style from './DropdownComponent.module.css';

const dropdownComponent = ({options, label}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div>
            <label htmlFor="dropdown">{label}</label>
            <select id="dropdown" value={selectedValue} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default dropdownComponent;
