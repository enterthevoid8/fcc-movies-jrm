import axios from 'axios';

export default axios.create({
    baseURL:'https://75a0-2401-4900-5d87-d19a-bd9a-9d6f-b1fe-ac8a.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});