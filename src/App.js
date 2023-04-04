import './App.css';
import ContentWrapperComponent from './contentWrapper/ContentWrapperComponent'

const App = () => {
    return (
        <div className={"App-wrapper"}>
            <header className={"App-header"}>
                <h1 className={"App-title"}> Ввод заявки </h1>
            </header>
            <div className={"App-body"}>
                <ContentWrapperComponent/>
            </div>
        </div>
    );
}

export default App;