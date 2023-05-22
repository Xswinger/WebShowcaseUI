import React, {useEffect, useState} from "react";
import style from "./PositionsWrapperComponent.module.css"
import PositionComponent from '../PositionComponent'

const positionsWrapperComponent = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [orders, setOrders] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [removed, setRemoved] = useState(0);

    const handleOrderAdd = () => {
        setOrders([...orders, orders.length + removed]);
        props.onAdd();
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (props.trigger) {
            handleOrderAdd();
        }
    }, [props.trigger])

    const handleOrderRemove = (orderToRemove) => {
        setOrders(orders.filter((element) => element !== orderToRemove));
        props.onRemove(orderToRemove);
        setRemoved(removed+1);
    };

    const handleChange = (id, field, value) => {
        props.onChange(id, field, value);
    }

    const orderComponents = [];
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        orderComponents.push(<PositionComponent key={order} index={order} onRemove={handleOrderRemove}
                                                onChange={handleChange}
                                                articles={props.articles} profiles={props.profiles}
                                                colors={props.colors}/>);
    }

    return (
        <div className={style.wrapper}>
            {orderComponents}
        </div>
    );
}

export default positionsWrapperComponent;