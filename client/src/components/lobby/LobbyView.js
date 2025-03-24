import React, {useState} from 'react';
import axios from "axios";
import Modal from '../modal/Modal'
import styles from './Lobby.module.css'

export default function LobbyView() {
    return (
        <div className={styles.heroIcon}
        style={{
            backgroundImage: `url('/assets/heroIcon.webp')`,
        }}></div>
    );
}