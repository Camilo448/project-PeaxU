import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-project-peaku-dev-sakc.3.us-1.fl0.io/api",
  //baseURL: 'http://localhost:4200/api',
});

export default instance;
