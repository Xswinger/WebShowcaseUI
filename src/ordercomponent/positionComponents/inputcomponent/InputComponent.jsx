import React, {useState} from "react";
import style from './InputComponent.module.css'


const inputComponent = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useState("");
    function handleInputChange(event) {
        let value = event.target.value;
        console.log(value);
        if (value === '') {
            setInputValue('');
            return;
        }
        value = value.replace(/\D/g, "");
        const intValue = parseInt(value);
        if (intValue >= 1 && intValue <= 99) {
            setInputValue(intValue.toString());
            props.onChange("quantity", intValue);
        }
    }
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input className="input"
                type="text"
                name={props.name}
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    );

}

export default inputComponent;