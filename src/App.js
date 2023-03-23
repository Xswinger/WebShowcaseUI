import './App.css';
import PositionWrapper from "./ordercomponent/positionsWrapperComponent/positionsWrapperComponent"
import CustomerComponent from './ordercomponent/customerComponent/CustomerComponent';
import OrderNumberComponent from './ordercomponent/orderNumberComponent/OrderNumberComponent';

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
            </div>
        </div>
    );
}

export default App;