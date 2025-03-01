import axios from 'axios';

const baseURL = 'https://raw.githubusercontent.com/altkraft/for-applicants/master/frontend/titanic/';

export const axiosInstance = axios.create({
    baseURL,
});
