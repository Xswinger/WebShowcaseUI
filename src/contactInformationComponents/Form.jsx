import React, {useState} from 'react'
import style from '../ordercomponent/orderInfoComponent/InfoComponent/InfoComponent.module.css'

function CustomerTitle(props) {
    return (
        <div className={style.title}>
            <h3>{props.title}</h3>
        </div>
    )
}

const Form = (props) => {

    const [contactData, setContactData] = useState({
        organization: "",
        mobile: "",
        email: "",
        address: "",
        customer: "",
        delivery: ""
    })

    const handleChange = (field, value) => {
        const data = contactData;
        if (field === 'Организация') {
            data.organization = value;
        }
        if (field === 'Телефон') {
            data.mobile = value;
        }
        if (field === 'Почта') {
            data.email = value;
        }
        if (field === 'Доставка') {
            data.delivery = value % 2 !== 0;
        }
        if (field === 'Адрес доставки') {
            data.address = value;
        }
        if (field === 'Заказчик') {
            data.customer = value;
        }
        setContactData(data);
        props.onChange(data);
    }

    return (
        <div>
            <InputField header={'Организация'} onChange={handleChange}/>
            <InputField header={'Телефон'} onChange={handleChange}/>
            <InputField header={'Почта'} onChange={handleChange}/>
            <Checkbox header={'Доставка'} onChange={handleChange}/>
            <InputField header={'Адрес доставки'} onChange={handleChange}/>
            <InputField header={'Заказчик'} onChange={handleChange}/>
        </div>
    )
}

function InputField(props) {

    const handleInputChange = (event) => {
        let value = event.target.value;
        props.onChange(props.header, value);
    }

    return (
        <div>
            <CustomerTitle title={props.header}/>
            <br/>
            <input type={'text'} className={style.text} onChange={handleInputChange}/>
        </div>
    )
}

function Checkbox(props) {

    const [clicked, setClicked] = useState(0);

    const handleClickChange = () => {
        let click = clicked
        click++;
        setClicked(click);
        props.onChange(props.header, click);
    }
    return (
        <div>
            <CustomerTitle title={props.header}/>
            <input type={'checkbox'} onChange={handleClickChange}/>
        </div>
    )
}

export default Form
