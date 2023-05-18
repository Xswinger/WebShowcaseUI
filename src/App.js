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
    const url = 'https://isaev-top.org/django/form_api/order';

    // form request with globalDataPosition and GlobalDataContact

    const handleChangePositions = (dataPositions) => {
        setGlobalDataPositions(dataPositions);
    }
    const handleChangeContact = (dataContact) => {
        console.log(dataContact);
        setGlobalDataContact(dataContact);
    }

    const handleSendData = () => {
        const standardizedItems = globalDataPositions.map(item => {
            return {
                "prof_id": parseInt(item.profile.slice(6)) + 4,
                "number_id": parseInt(item.article.slice(6)) + 4,
                "inner_color_id": "KZ205-U6",
                "outer_color_id": "KZ205-U6",
                "amount": item.quantity,
                "notes": item.note
            }
        })
        const dataToSend = {
            "organization": globalDataContact.organization,
            "address": globalDataContact.address,
            "email": globalDataContact.email,
            "phone": globalDataContact.mobile,
            "items": standardizedItems
        }
        const jsonData = JSON.stringify(dataToSend);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: jsonData
        };
        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Response from server:', data);
            })
            .catch(error => {
                console.error('Error sending data to server:', error);
            });
    }

    return (
        <Router>
            <Routes>
                <Route path='/contact' element={<ContactPages onChange={handleChangeContact}
                                                              onClick={handleSendData}/>}/>
                <Route path='/' element={<MainPages onChange={handleChangePositions}/>}/>
            </Routes>
        </Router>
    );
}

export default App;