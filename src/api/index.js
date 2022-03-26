import axios from "axios";
import { URL } from "../config";

const instance = axios.create({
  baseURL: URL,
});

const get = async (url) => {
  return await instance.get(url, {
    withCredentials: true,
  });
};

const post = async (url) => {
  return await instance.post(url, {
    withCredentials: true,
  });
};

export default instance;
export {get, post}
