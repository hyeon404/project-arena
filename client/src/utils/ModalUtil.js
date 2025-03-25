let callback = null;

export const registerModal = (cb) => {
    callback = cb;
}

export const showModal = (message, onClose) => {
    if( callback ) {
        callback(message, onClose);
    }
};