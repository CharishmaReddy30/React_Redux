import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-41394.firebaseio.com/"
});

export default instance;
