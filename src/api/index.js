import axios from "axios";

const instance = axios.create({
  baseURL: "https://backendtzuzulcode.wl.r.appspot.com",
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
