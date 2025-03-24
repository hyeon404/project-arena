import React, {useState} from 'react';
import './App.css';
import AuthView from './components/auth/AuthView.js';
import LobbyView from "./components/lobby/LobbyView";

export default function App() {
    const [currentView, setCurrentView] = useState('auth');

    const handleLoginSuccess = () => {
        setCurrentView('lobby');
    }

    return (
        <div className="App" style={{backgroundImage: `url("/assets/background.webp")`}}>
            {currentView === 'auth' && <AuthView onLoginSuccess={handleLoginSuccess} />}
            {currentView === 'lobby' && <LobbyView/>}
            // TODO HeroView, BattleLobbyView, BattleView 추가 필요
        </div>
    )
}