import React, {useState} from 'react';
import axios from "axios";
import Modal from '../modal/Modal'
import styles from './Lobby.module.css'

export default function LobbyView() {
    return (
        <div className={styles.lobby_container}>
            <button className={styles.hero_icon} onClick={() => console.log('clicked')}>
                <img src={`/assets/icon.webp`} alt=''/>
            </button>
        </div>
    );
}