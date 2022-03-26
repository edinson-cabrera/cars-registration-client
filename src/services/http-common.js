import axios from "axios";
export default axios.create({
  // Development URL (http://localhost:8080/api)
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});
