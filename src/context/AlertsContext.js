import React, { createContext, useState } from "react";

// Hooks
import useAlerts from "../hooks/useAlerts";

// Utils
import { v4 as uuidv4 } from "uuid";

const AlertsContext = createContext(null);

const AlertsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const addAlert = (alertType, alertText) => {
    const id = uuidv4();
    const updatedAlerts = [
      ...alerts,
      {
        text: alertText,
        type: alertType,
        id: id,
      },
    ];
    setAlerts(updatedAlerts);
  };
  const removeAlert = (id) => {
    setAlerts([...alerts].filter((alert) => alert.id !== id));
  };

  useAlerts(alerts, removeAlert);

  return (
    <AlertsContext.Provider
      value={{
        alerts,
        addAlert,
        removeAlert,
        setAlerts,
      }}
    >
      {children}
    </AlertsContext.Provider>
  );
};

export { AlertsContext, AlertsProvider };
