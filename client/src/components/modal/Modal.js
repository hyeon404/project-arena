import styles from './Modal.module.css'

function Modal({ isOpen, message, onClose }) {
    return (
        <>
        {
            isOpen &&
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <p>{message}</p>
                    <button onClick={onClose}>확인</button>
                </div>
            </div>
        }
        </>
    );
}

export default Modal;