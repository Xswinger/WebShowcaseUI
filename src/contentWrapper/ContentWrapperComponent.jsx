import React, {useState} from 'react'
import OrderInfoComponent from '../ordercomponent/orderInfoComponent/OrderInfoComponent'
import PositionWrapper from '../ordercomponent/positionsWrapper/PositionsWrapperComponent'
import style from './ContentWrapperComponent.module.css'
import {useNavigate} from 'react-router-dom'
import PlusButtonComponent from './addButton/PlusButtonComponent'

const ContentWrapperComponent = (props) => {

    const [actualData, setActualData] = useState(new Map());
    const [click, setClick] = useState(0);

    const handleOnChange = (id, field, value) => {
        const data = [...actualData];
        if (field === 'профиль:') {
            data[id].profile = value;
        } else if (field === 'Артикул:') {
            data[id].article = value;
        } else if (field === 'Note') {
            data[id].note = value;
        } else if (field === 'color') {
            data[id].color = value;
        } else if (field === 'quantity') {
            data[id].quantity = value;
        }
        setActualData(data);
        props.onChange(actualData);
    }

    const handleOnAdd = (id) => {
        const data = [...actualData, {color: "", quantity: 0, profile: 'option1', article: 'option1', note: ""}];
        setActualData(data);
        props.onChange(data);
    }

    const handleOnRemove = (index) => {
        const data = [...actualData]
        data[index] = null;
        setActualData(data);
        props.onChange(data);
    }


    return (
        <div className={style.wrapper}>
            <div>
                <OrderInfoComponent/>
                {/*<PlusButtonComponent onAdd={handleOnAdd} onClick={}/>*/}
            </div>
            <PositionWrapper onChange={handleOnChange} onRemove={handleOnRemove} onAdd={handleOnAdd}/>
            <RedirectButton/>
        </div>
    )
}

function RedirectButton() {

    const navigate = useNavigate()

    const navigateContact = () => {
        navigate('/contact')
    }

    return (
        <div className="columns is-mobile is-centered">
            <div className="column is-narrow mt-2">
                <button className="button is-success is-medium" onClick={navigateContact}>Оформить заказ</button>
            </div>
        </div>
    )
}

export default ContentWrapperComponent