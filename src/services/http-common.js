import axios from "axios";
export default axios.create({
  baseURL: "https://cars-registration-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
