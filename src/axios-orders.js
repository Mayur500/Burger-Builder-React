import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-4cc00-default-rtdb.firebaseio.com/'
})

export default instance;