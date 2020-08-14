import axios from "axios";

// Authorization
import { httpHeader } from "../../auth/tasksAPISettings";

const axiosHTTPCall = async (
  HTTPMethod,
  APIUrl,
  payload,
  setIsloading,
  callback
) => {
  try {
    setIsloading(true);
    let axiosCall;
    // create new function for axios call with saved params
    if (HTTPMethod === "get" || "delete") {
      axiosCall = axios[HTTPMethod].bind(null, APIUrl, httpHeader);
    } else {
      axiosCall = axios[HTTPMethod].bind(null, APIUrl, payload, httpHeader);
    }
    const { data } = await axiosCall();
    callback(data);
    setIsloading(false);
  } catch (error) {
    setIsloading(false);
    console.log(error);
  }
};

export default axiosHTTPCall;
