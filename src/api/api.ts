import axios from "axios";

const Api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL_BACKEND}`,
});

export default Api;
