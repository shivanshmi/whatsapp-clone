import axios from "axios";
const url = "http://localhost:8000";
export const addUser = async (data) => {
  try {
    await axios.post(`${url}/addUser`, data);
  } catch (error) {
    console.log("Error while saving the data", error.message);
  }
};
