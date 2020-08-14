import axios from "axios";

// Authorization
import { httpHeader } from "../../auth/tasksAPISettings";

const axiosHTTPCall = async (HTTPMethod, APIUrl, setIsloading, callback) => {
  try {
    setIsloading(true);
    const { data } = await axios[HTTPMethod](APIUrl, httpHeader);
    callback(data);
    setIsloading(false);
  } catch (error) {
    setIsloading(false);
    console.log(error);
  }
};

export default axiosHTTPCall;
