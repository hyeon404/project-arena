import axios from "axios";
import {showModal} from "./ModalUtil";

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_HOST,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    }
});

api.interceptors.response.use(
    (response) => {
        if( response.data.code !== '0000' ) {
            showModal(response.data.message);
        }
        return response.data;
    },
    (error) => error
);

export default api;