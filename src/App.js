import './App.css';
import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import {ContactPages, MainPages} from './pages/Pages'


const App = () => {
    const [globalDataPositions, setGlobalDataPositions] = useState(new Map())
    const [globalDataContact, setGlobalDataContact] = useState(new Map())

    // form request with globalDataPosition and GlobalDataContact

    const handleChangePositions = (dataPositions) => {
        console.log("length: " + dataPositions.length);
        for (let i = 0; i < dataPositions.length; i++) {
            console.log("globalDataPositions color: " + dataPositions[i].color);
            console.log("globalDataPositions quantity: " + dataPositions[i].quantity);
            console.log("globalDataPositions profile: " + dataPositions[i].profile);
            console.log("globalDataPositions article: " + dataPositions[i].article);
            console.log("globalDataPositions note: " + dataPositions[i].note);
            console.log("-----------------------------------------")
        }
        setGlobalDataPositions(dataPositions);
    }
    const handleChangeContact = (dataContact) => {
        console.log(dataContact);
        setGlobalDataContact(dataContact);
    }

    return (
        <Router>
            <Routes>
                <Route path='/contact' element={<ContactPages onChange={handleChangeContact}/>}/>
                <Route path='/' element={<MainPages onChange={handleChangePositions}/>}/>
            </Routes>
        </Router>
    );
}

export default App;