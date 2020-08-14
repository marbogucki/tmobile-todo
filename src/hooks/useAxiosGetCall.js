import React, { useEffect } from "react";

// Libraries
import axios from "axios";

const httpCall = async (tasksAPIUrl, httpHeader, setIsloading, callback) => {
  try {
    setIsloading(true);
    const { data } = await axios.get(tasksAPIUrl, httpHeader);
    callback(data);
    setIsloading(false);
  } catch (error) {
    setIsloading(false);
    console.log(error);
  }
};

const useAxiosCall = (tasksAPIUrl, httpHeader, setIsloading, callback) => {
  useEffect(() => {
    httpCall(tasksAPIUrl, httpHeader, setIsloading, callback);
  }, []);
};

export default useAxiosCall;
