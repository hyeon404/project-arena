import styles from './Modal.module.css'
import {useEffect, useState} from "react";
import {registerModal} from '../../utils/ModalUtil';

export default function Modal() {
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(false);
    const [callback, setCallback] = useState(null);

    useEffect(() => {
        registerModal((msg, cb) => {
            setMessage(msg);
            setVisible(true);
            setCallback(() => cb);
        }, setVisible)

        const handleKeyDown = (e) => {
            if( e.key === 'Enter' ) {
                e.preventDefault();
                e.stopPropagation();
                closeHandle();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [visible]);

    const closeHandle = () => {
        if( callback ) callback();
        setMessage('');
        setVisible(false);
        setCallback(null);
    }

    if( !visible ) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <p>{message}</p>
                <button onClick={closeHandle}>확인</button>
            </div>
        </div>
    );
}