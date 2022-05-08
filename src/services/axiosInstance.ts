import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: { Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}` },
});

export default axiosInstance;
