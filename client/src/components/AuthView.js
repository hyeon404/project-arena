import React, {useState} from 'react';
import styles from './AuthView.module.css';
import axios from 'axios';

const API = {
    register: '/auth/register',
    login: '/auth/login',
};

function AuthView() {
    const [regId, setRegId] = useState('');
    const [regPassword, setRegPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        console.log(process.env.REACT_APP_SERVER_HOST)

        axios.post(`${process.env.REACT_APP_SERVER_HOST}${API.register}`, {
            id: regId,
            password: regPassword
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            alert(res.data);

        }).catch(e => {
            console.log(e)
            alert(`Failed cause : ${e}`)
        })
    }

    return (
        <div className={styles.auth_view}>
            <h1>Welcome</h1>
            <div className="register-container">
                <h2>회원가입</h2>
                <form onSubmit={handleRegister}>
                    <div className={styles.auth_grid}>
                        <span>ID : </span>
                        <input
                            type="text"
                            name="id"
                            placeholder="아이디"
                            value={regId}
                            onChange={e => setRegId(e.target.value)}
                            required
                        />
                        <span>PW : </span>
                        <input
                            type="text"
                            name="password"
                            placeholder="비밀번호"
                            value={regPassword}
                            onChange={e => setRegPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">회원가입</button>
                </form>
            </div>
        </div>
    )
}

export default AuthView;