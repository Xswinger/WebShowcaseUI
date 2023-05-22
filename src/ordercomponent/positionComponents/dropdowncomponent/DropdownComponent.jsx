import React, {useState} from 'react';
import style from './DropdownComponent.module.css';

const dropdownComponent = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        props.onChange(props.type, event.target.value)
    };

    return (
        <div>
            <label htmlFor="dropdown">{props.label}</label>
            <div className="select">
                <select id="dropdown" value={selectedValue} onChange={handleChange}>
                    {props.options.map((option) => (
                        <option key={option.value} value={option.value} className={style.container}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default dropdownComponent;
