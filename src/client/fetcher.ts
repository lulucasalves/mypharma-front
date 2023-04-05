import axios from "axios";

export const api = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Accept-Language": "pt-BR",
  },
  baseURL: `http://localhost:5000`,
});
