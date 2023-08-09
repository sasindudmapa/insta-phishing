import axios from "axios";

let local = "http://localhost:9000";
let ser = "https://seal-button.cyclic.app";
const baseUrl = axios.create({
  baseURL: ser,
});

export default baseUrl;
