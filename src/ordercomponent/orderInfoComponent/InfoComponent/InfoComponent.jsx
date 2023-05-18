import React, {useState} from "react";
import style from "./InfoComponent.module.css";

function CustomerTitle(props) {
    return (
        <label className="label is-size-5 mb-0">{props.title}</label>
    )
}

const infoComponent = (props) => {

    function handleValue(event) {
        let value = event.target.value
        props.onChange(value)
    }

    return (
        <div className={style.wrapper}>
            <div className="field">
                <CustomerTitle title={props.header}/>
                <div className="control">
                    <input className="input is-normal" type="text" onChange={handleValue}></input>
                </div>
            </div>
        </div>
    );
}

export default infoComponent;