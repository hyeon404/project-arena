import React, {useState} from 'react';
import styles from './AuthView.module.css';
import axios from "axios";
import {showModal} from '../../utils/ModalUtil'

import axiosUtil from '../../utils/AxiosUtil';

const API = {
    register: '/auth/register',
    login: '/auth/login',
};

export default function AuthView({onLoginSuccess}) {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axiosUtil.post(`${API.login}`, {id: id, password: pw})

            if( response.code === '0000' ) {
                showModal(`환영합니다.\n${response.uid} 님`, onLoginSuccess);
            }
        } catch (err) {
            showModal(err.message);
        }
    };

    const handleRegister = async () => {
        try {
            const response = await axiosUtil.post(`${API.register}`, {id: id, password: pw})

            if( response.code === '0000' ) {
                showModal(`환영합니다.\n${response.uid} 님 로그인을 진행해주세요`);
            }
        } catch (err) {
            showModal(err.message);
        }

    };

    return (
        <div className={styles.login_container}>
            <span className={styles.title}>After light</span>

            <div className={styles.form}>
                <div className={styles.input_row}>
                    <div className={styles.label}>ID</div>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className={styles.input}
                    />
                </div>

                <div className={styles.input_row}>
                    <div className={styles.label}>PW</div>
                    <input
                        type="password"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                        className={styles.input}
                    />
                </div>

                {error && <div className={styles.error}>{error}</div>}

                <div className={styles.button_row}>
                    <button onClick={handleLogin}>로그인</button>
                    <button onClick={handleRegister}>회원가입</button>
                </div>
            </div>
        </div>
    );
}