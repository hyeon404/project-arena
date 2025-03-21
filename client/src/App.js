import React, {useState} from 'react';
import AuthView from './components/AuthView';
import './App.css';

function App() {
    const [currentView, setCurrentView] = useState('auth');
    return (
        <div className="App">
            <AuthView/>
        </div>
    )
}

export default App;