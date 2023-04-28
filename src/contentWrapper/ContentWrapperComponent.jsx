import React, {useState} from 'react'
import OrderInfoComponent from '../ordercomponent/orderInfoComponent/OrderInfoComponent'
import PositionWrapper from '../ordercomponent/positionsWrapper/PositionsWrapperComponent'
import style from './ContentWrapperComponent.module.css'

const ContentWrapperComponent = (props) => {

    const [actualData, setActualData] = useState(new Map());

    const handleRedirect = () => {
        console.log('here');
        //actualData - это поле, в котором хранится массив json-ов каждого заказа
        //надо придумать, как информацию об этом поле перекинуть на другую страницу
        console.log(actualData);
    }

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
        for (let i = 0; i < actualData.length; i++) {
            console.log(actualData[i]);
        }
    }

    const handleOnAdd = (id) => {
        setActualData([...actualData, {color: "", quantity: 0, profile: 'option1', article: 'option1', note: ""}])
    }

    const handleOnRemove = (index) => {
        console.log('removed from content: ' + index);
        const data = [...actualData]
        data[index] = null;
        setActualData(data);
        console.log(data);
    }


    return (
        <div className={style.wrapper}>
            <OrderInfoComponent/>
            <PositionWrapper onChange={handleOnChange} onAdd={handleOnAdd} onRemove={handleOnRemove}/>
            <RedirectButton onClick={handleRedirect}/>
        </div>
    )
}

function RedirectButton() {
    return (
        <div className={style.redirect_button_wrapper}>
            <button className={style.redirect_button}> Оформить заказ</button>
        </div>
    )
}

export default ContentWrapperComponent