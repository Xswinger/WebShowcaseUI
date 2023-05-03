import React from 'react'
import style from './ContactInformationWrapper.module.css'
import Form from './Form'

const ContactInformationWrapper = (props) => {
    return (
        <div className={style.wrapper}>
            <Form onChange={props.onChange}/>
            <ButtonsWrapper/>
        </div>
    )
}

function ButtonsWrapper() {
    return (
        <div className={style.buttons_wrapper}>
            <AcceptButton/>
            <BackButton/>
        </div>
    )
}

function BackButton() {
    return (
        <div>
            <button className={style.back_button}> Вернуться </button>
        </div>
    )
}

function AcceptButton() {
    return (
        <div>
            <button className={style.accept_button}> Подтвердить заказ </button>
        </div>
    )
}

export default ContactInformationWrapper