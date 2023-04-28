import React, {useState} from 'react';
import style from './DropdownComponent.module.css';

const dropdownComponent = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        console.log(event.target.value);
        props.onChange(props.label.split(' ')[1], event.target.value)
    };

    return (
        <div>
            <label htmlFor="dropdown">{props.label}</label>
            <select id="dropdown" value={selectedValue} onChange={handleChange} className={style.container}>
                {props.options.map((option) => (
                    <option key={option.value} value={option.value} className={style.container}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default dropdownComponent;
