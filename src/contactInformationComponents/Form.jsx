import React from 'react'
import style from '../ordercomponent/orderInfoComponent/InfoComponent/InfoComponent.module.css'

function CustomerTitle(props) {
    return (
        <div className={style.title}>
            <h3>{props.title}</h3>
        </div>
    )
}

const Form = () => {
    return (
        <div>
            <InputField header={'Организация'}/>
            <InputField header={'Телефон'}/>
            <InputField header={'Почта'}/>
            <Checkbox header={'Доставка'}/>
            <InputField header={'Адрес доставки'}/>
            <InputField header={'Заказчик'}/>
        </div>
    )
}

function InputField(props) {
    return(
        <div>
            <CustomerTitle title={props.header}/>
            <br/>
            <input type={'text'} className={style.text}></input>
        </div>
    )
}

function Checkbox(props) {
    return (
        <div>
            <CustomerTitle title={props.header}/>
            <input type={'checkbox'}/>
        </div>
    )
}

export default Form
