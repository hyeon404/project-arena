let modalCallback = null;
let setModalVisible = null;
let modalVisible = null;

export const registerModal = (cb, setVisibleFn) => {
    modalCallback = cb;
    setModalVisible = setVisibleFn;
}

export const showModal = (message, onClose) => {
    if( modalCallback && setModalVisible ) {
        setModalVisibleState(true)
        modalCallback(message, () => {onClose?.(); setModalVisibleState(false)});
    }
};

const setModalVisibleState = (visible) => {
    setModalVisible(visible);
    modalVisible = visible;
}

export const isModalOpen = () =>  !!modalVisible;