import axios from "axios";
// require("dotenv").config();
const url_api = "http://localhost:3001";

export const getUsers = async () => {
  // console.log(process.env.REACT_APP_API);
  const result = await axios.get(`${url_api}/user/all`);
  // console.log(result);
  return result.data.users;
}