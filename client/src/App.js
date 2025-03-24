import React, {useState} from 'react';
import AuthView from './components/auth/AuthView.js';
import './App.css';

function App() {
    const [currentView, setCurrentView] = useState('auth');
    const backgroundImageUrl = '/assets/background.webp'; // public 폴더 기준 경로

    return (
        <div className="App">
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundImage: `url(${backgroundImageUrl})`,
                    backgroundSize: 'cover',          // 화면에 맞게 꽉 채움 (비율 유지)
                    backgroundPosition: 'center',     // 가운데 정렬
                    backgroundRepeat: 'no-repeat'     // 반복 금지
                }}
            >
                <AuthView/>
            </div>
        </div>
    )
}

export default App;