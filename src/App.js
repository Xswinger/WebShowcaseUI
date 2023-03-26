import './App.css';
import PositionWrapper from "./positionsWrapperComponent/positionsWrapperComponent"
import CustomerComponent from './customerComponent/CustomerComponent';
import OrderNumberComponent from './orderNumberComponent/OrderNumberComponent';
import OrderComponent from './ordercomponent/OrderComponent';

const App = () => {
    return (
        <div className={"App-wrapper"}>
            <header className={"App-header"}>
                <h1 className={"App-title"}> Ввод заявки </h1>
            </header>
            <div className={"App-body"}>
                <CustomerComponent/>
                <OrderNumberComponent/>
                <PositionWrapper/>
                <OrderComponent/>
            </div>
        </div>
    );
}

export default App;