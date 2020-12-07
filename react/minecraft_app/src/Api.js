import axios from 'axios';

const Api = axios.create({
    baseURL:'http://localhost:15683',
});

Api.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

export default Api;