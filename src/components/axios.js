import axios from "axios";

const instance = axios.create({
  baseURL: "https://en.wikipedia.org/w/api.php",
});
export default instance;
