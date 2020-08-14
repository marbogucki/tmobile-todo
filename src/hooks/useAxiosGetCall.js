import { useEffect } from "react";

// Libraries
import axios from "axios";

// Utils
import axiosHTTPCall from "../utils/httpAxiosCalls/axiosHTTPCall";

// Authorization
import { httpHeader } from "../auth/tasksAPISettings";

const useAxiosGetCall = (tasksAPIUrl, setIsloading, callback) => {
  useEffect(() => {
    axiosHTTPCall("get", tasksAPIUrl, setIsloading, callback);
  }, []);
};

export default useAxiosGetCall;
