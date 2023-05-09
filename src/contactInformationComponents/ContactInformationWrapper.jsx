import React from 'react'
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
        <div className={style.buttons_wrapper}>
            <AcceptButton onClick={props.onClick}/>
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
            <button className={style.back_button} onClick={navigateMain}> Вернуться </button>
        </div>
    )
}

function AcceptButton(props) {
    return (
        <div>
            <button className={style.accept_button} onClick={props.onClick}> Подтвердить заказ </button>
        </div>
    )
}

export default ContactInformationWrapper