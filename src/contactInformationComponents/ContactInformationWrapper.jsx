import React, {useState} from 'react'
import style from './ContactInformationWrapper.module.css'
import Form from './Form'
import {useNavigate} from 'react-router-dom'


const ContactInformationWrapper = (props) => {

    return (
        <div className={style.wrapper}>
            <Form onChange={props.onChange}/>
            <ButtonsWrapper onClick={props.onClick}/>
        </div>
    )
}

function ButtonsWrapper(props) {
    return (
        <div className="m-3">
            <AcceptButton onClick={props.onClick} checkbox={props.checkbox}/>
            <BackButton/>
        </div>
    )
}

function BackButton() {

    const navigate = useNavigate()

    const navigateMain = () => {
        navigate('/')
    }

    return (
        <div>
            <button className="button is-danger" onClick={navigateMain}> Вернуться </button>
        </div>
    )
}

function AcceptButton(props) {

    return (
        <div className="m-2">
            <button className="button is-success" onClick={props.onClick}> Подтвердить заказ </button>
        </div>
    )
}

export default ContactInformationWrapper