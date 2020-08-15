import { useEffect } from "react";

// Utils
import axiosHTTPCall from "../utils/httpAxiosCalls/axiosHTTPCall";

const useAxiosGetCall = (
  tasksAPIUrl,
  setIsloading,
  callback,
  dependenciesArray
) => {
  useEffect(() => {
    axiosHTTPCall("get", tasksAPIUrl, null, setIsloading, callback);
  }, [...dependenciesArray]);
};

export default useAxiosGetCall;
