import React, {useState} from 'react'
import validator from 'validator/es'

function CustomerTitle(props) {
    return (
        <label className="label">{props.title}</label>
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
            <PhoneField header={'Телефон'} onChange={handleChange}/>
            <EmailField header={'Почта'} onChange={handleChange}/>
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
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <CustomerTitle title={props.header}/>
            </div>
            <div className="field-body">
                <div className="field"> 
                    <input className="input is-normal" type="text" onChange={handleInputChange}/>
                </div>
            </div>
        </div>
    )
}

function PhoneField(props) {

    const [valid, setValid] = useState(false)

    function validate(event) {
        let value = event.target.value
        props.onChange(props.header, value);
        value = value.replace(/\D/g, '')
            .replace(/^7/, '8')
            .replace(' ', '')
            .replace('(', '')
            .replace(')', '')
            .replace('-', '')

        if (validator.isMobilePhone(value, ['ru-RU'])) {
            setValid(true)
        } else {
            setValid(false)
        }

    }


    return(

        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <CustomerTitle title={props.header}/>
            </div>
            <div className="field-body">
                <div className="field">
                    {valid ? <h1></h1> : <h1>Введен неверный номер</h1>}
                    <input type="text" className="input" onChange={validate}/>
                </div>
            </div>
        </div>
    )
}

function EmailField(props) {

    const [valid, setValid] = useState(false)

    function validate(event) {
        let value = event.target.value
        props.onChange(props.header, value);

        if (validator.isEmail(value)) {
            setValid(true)
        } else {
            setValid(false)
        }

    }

    return(

        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <CustomerTitle title={props.header}/>
            </div>
            <div className="field-body">
                <div className="field">
                    {valid ? <h1></h1> : <h1>Введен неверный адрес почты</h1>}
                    <input type={'text'} className="input" onChange={validate}></input>
                </div>
            </div>
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

        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <CustomerTitle title={props.header}/>
            </div>
            <div className="field-body is">
                <input type={'checkbox'} className="checkbox is-medium" onChange={handleClickChange}/>
            </div>
        </div>
    )
}

export default Form
