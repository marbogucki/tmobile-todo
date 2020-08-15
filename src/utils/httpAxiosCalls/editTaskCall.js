import { useContext } from "react";

import axios from "axios";

// Context
import AlertsContext from "../../context/AlertsContext";

// Authorization
import { tasksAPIUrl, httpHeader } from "../../auth/tasksAPISettings";

const editTaskCall = async (
  APITaskUrl,
  payload,
  setIsloading,
  addAlert,
  callback
) => {
  setIsloading(true);
  try {
    const { data } = await axios.patch(APITaskUrl, payload, httpHeader);
    console.log("task response: ", data);
    setIsloading(false);
    callback(data);
  } catch (error) {
    setIsloading(false);
    addAlert(
      "danger",
      "Ups. Unable to edit task. Check data and connection",
      3000
    );
    console.log(error);
  }
};

export default editTaskCall;
