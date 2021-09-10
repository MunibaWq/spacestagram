import axios from "axios";

export const getNasaAPOD = async () => {
  let res = await axios.get(`https://api.nasa.gov/planetary/apod?`, {
    params: {
      api_key: process.env.REACT_APP_NASA_API_KEY,
    },
  });
  return res.data;
};
