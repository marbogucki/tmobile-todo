import { useEffect } from "react";

// Utils
import axiosHTTPCall from "../utils/httpAxiosCalls/axiosHTTPCall";

const useAxiosGetCall = (tasksAPIUrl, setIsloading, callback) => {
  useEffect(() => {
    axiosHTTPCall("get", tasksAPIUrl, null, setIsloading, callback);
  }, []);
};

export default useAxiosGetCall;
