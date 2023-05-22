import React, {useState} from 'react'
import OrderInfoComponent from '../ordercomponent/orderInfoComponent/OrderInfoComponent'
import PositionWrapper from '../ordercomponent/positionsWrapper/PositionsWrapperComponent'
import style from './ContentWrapperComponent.module.css'
import {useNavigate} from 'react-router-dom'
import PlusButtonComponent from "./addButton/PlusButtonComponent";

const ContentWrapperComponent = (props) => {

    const [actualData, setActualData] = useState(new Map());
    const [value, setValue] = useState(0);
    const [trigger, setTrigger] = useState(0);

    const handleOnChange = (id, field, value) => {
        const data = [...actualData];
        if (field === 'profile') {
            data[id].profile = value;
        } else if (field === 'article') {
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

    const handleOnAdd = () => {
        const data = [...actualData, {color: "", quantity: 0, profile: 'option1', article: 'option1', note: ""}];
        setActualData(data);
        setValue(value+1);
        props.onChange(data);
    }

    const handleOnRemove = (index) => {
        const data = [...actualData]
        data[index] = null;
        setActualData(data);
        setValue(value-1);
        props.onChange(data);
    }


    return (
        <div className={style.wrapper}>
            <div>
                <OrderInfoComponent/>
                <PlusButtonComponent onClick={() => {
                    setTrigger((trigger) => trigger + 1)
                }}/>
            </div>
            <PositionWrapper onChange={handleOnChange} onRemove={handleOnRemove} onAdd={handleOnAdd}
            colors={props.colors} articles={props.articles} profiles={props.profiles} trigger={trigger}/>
            <RedirectButton orderCount={value}/>
        </div>
    )
}

function RedirectButton(props) {

    const navigate = useNavigate()

    const navigateContact = () => {
        navigate('/contact')
    }

    return (
        <div className="columns is-mobile is-centered">
            <div className="column is-narrow mt-2">
                {props.orderCount === 0
                    ? <button className="button is-success is-medium" onClick={navigateContact} disabled={true}>Оформить заказ</button>
                    : <button className="button is-success is-medium" onClick={navigateContact}>Оформить заказ</button>
                }
            </div>
        </div>
    )
}

export default ContentWrapperComponent