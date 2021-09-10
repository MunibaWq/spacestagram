import axios from "axios";

export default axios.create({
  baseURL: "",
  headers: {
    Authorization: process.env.REACT_APP_NASA_API_KEY,
  },
});
