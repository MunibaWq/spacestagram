import axios from "axios";

export const getNasaMars = async () => {
  try {
    let result = await axios.get("/api/nasa/");
    return result;
  } catch (e) {
    if (e.response.status === 404) {
      throw new Error("Data not available");
    }
  }
};
