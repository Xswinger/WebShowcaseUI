import './App.css';
import React, {useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import {ContactPages, MainPages} from './pages/Pages'
import axios from "axios";



const App = () => {
    const [globalDataPositions, setGlobalDataPositions] = useState(new Map())
    const [globalDataContact, setGlobalDataContact] = useState(new Map())
    const url = 'https://leshainc.ru/form_api/';
    const order = 'order';
    const colorsEndPoint = 'colors';
    const profilesEndPoint = 'profiles';
    const articlesEndPoint = 'item_numbers';
    const [profilesFromServer, setProfilesFromServer] = useState(null);
    const [articlesFromServer, setArticlesFromServer] = useState(null);
    const [colorsFromServer, setColorsFromServer] = useState(null);

    useEffect(() => {
        axios.get(url+profilesEndPoint)
            .then(response => {
                console.log(response);
                setProfilesFromServer(response.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            })
    }, [])

    useEffect(() => {
        axios.get(url+articlesEndPoint)
            .then(response => {
                console.log(response);
                setArticlesFromServer(response.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            })
    }, [])

    useEffect(() => {
        axios.get(url+colorsEndPoint)
            .then(response => {
                console.log(response);
                setColorsFromServer(response.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            })
    }, [])

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
                "prof_id": parseInt(item.profile.slice(6)),
                "number_id": parseInt(item.article.slice(6)),
                "inner_color_id": item.color,
                "outer_color_id": item.color,
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
        console.log('data to send: ', jsonData)
        fetch(url + order, options)
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
                <Route path='/' element={<MainPages onChange={handleChangePositions} profiles={profilesFromServer}
                articles={articlesFromServer} colors={colorsFromServer}/>}/>
            </Routes>
        </Router>
    );
}

export default App;