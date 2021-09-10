import axios from "axios";

export const getNasaMars = async () => {
  let res = await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&a`,
    {
      params: {
        api_key: process.env.REACT_APP_NASA_API_KEY,
      },
    }
  );
  return res;
};
