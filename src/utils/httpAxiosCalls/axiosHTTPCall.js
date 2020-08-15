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
    if (HTTPMethod === "get" || HTTPMethod === "delete") {
      axiosCall = axios[HTTPMethod].bind(null, APIUrl, httpHeader);
    } else if (
      HTTPMethod === "put" ||
      HTTPMethod === "patch" ||
      HTTPMethod === "post"
    ) {
      axiosCall = axios[HTTPMethod].bind(null, APIUrl, payload, httpHeader);
    }
    const { data } = await axiosCall();
    callback(data, null);
    setIsloading(false);
    return data;
  } catch (error) {
    setIsloading(false);
    console.log(error);
    callback(null, error);
  }
};

export default axiosHTTPCall;
