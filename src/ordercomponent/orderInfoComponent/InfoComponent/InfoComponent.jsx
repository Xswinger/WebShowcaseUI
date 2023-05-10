import React from "react";
import style from "./InfoComponent.module.css";

function CustomerTitle(props) {
    return (
        <label className="label is-size-5 mb-0">{props.title}</label>
    )
}

const infoComponent = (props) => {
    return (
        <div className={style.wrapper}>
            <div className="field">
                <CustomerTitle title={props.header}/>
                <div className="control">
                    <input className="input is-normal" type="text"></input>
                </div>
            </div>
        </div>
    );
}

export default infoComponent;