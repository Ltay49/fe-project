import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://be-nc-news-lt-1.onrender.com/api',
    timeout: 1000,
})

export default axiosInstance