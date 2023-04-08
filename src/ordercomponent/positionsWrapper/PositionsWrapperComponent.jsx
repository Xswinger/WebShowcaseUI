import React, {useState} from "react";
import style from "./PositionsWrapperComponent.module.css"
import PositionComponent from '../PositionComponent'
import PlusButtonComponent from "../../contentWrapper/ addbutton/PlusButtonComponent";

const positionsWrapper = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [orders, setOrders] = useState([]);

    const handleOrderAdd = () => {
        setOrders([...orders, orders.length]);
    };

    const handleOrderRemove = (orderToRemove) => {
        setOrders(orders.filter((element) => element !== orderToRemove));
    };

    const orderComponents = [];
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        orderComponents.push(<PositionComponent key={order} index={order} onRemove={handleOrderRemove} />);
    }

    return (
        <div className={style.wrapper}>
            <PlusButtonComponent onClick={handleOrderAdd}/>
            {orderComponents}
        </div>
    );
}

export default positionsWrapper;