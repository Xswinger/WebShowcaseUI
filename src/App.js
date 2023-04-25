import './App.css';
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import {ContactPages, MainPages} from './pages/Pages'


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/contact' element={<ContactPages/>}/>
                <Route path='/' element={<MainPages/>}/>
            </Routes>
        </Router>
    );
}

export default App;