import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

const defaultOptions = {
    baseURL: `${REACT_APP_BASE_URL!}`,
};

const axiosInstance = axios.create(defaultOptions);

export { axiosInstance };
