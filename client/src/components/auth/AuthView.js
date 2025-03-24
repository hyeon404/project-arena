import React, {useState} from 'react';
import styles from './AuthView.module.css';
import axios from "axios";
import Modal from '../modal/Modal'

const API = {
    register: '/auth/register',
    login: '/auth/login',
};

export default function AuthView() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [error, setError] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const showModal = (message) => {
        setModalMessage(message);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalMessage('');
    };

    const handleLogin = async () => {
        try {
            axios.post(`${process.env.REACT_APP_SERVER_HOST}${API.login}`, {
                id: id,
                password: pw
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                showModal(`환영합니다.\n${res.data.uid} 님`)
            }).catch((e) => {
                showModal(e.response.data.message || e.message);
            })
        } catch (err) {
            showModal(err.message);
        }
    };

    const handleRegister = async () => {
        try {
            axios.post(`${process.env.REACT_APP_SERVER_HOST}${API.register}`, {
                id: id,
                password: pw
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res);
            }).catch(e => {
                console.log(e)
            })
        } catch (err) {
            setError('회원가입 실패. 다시 시도해주세요.');
        }
    };

    return (
        <>
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

            <Modal
                isOpen={isModalOpen}
                message={modalMessage}
                onClose={handleCloseModal}
            />
        </>
    );
}