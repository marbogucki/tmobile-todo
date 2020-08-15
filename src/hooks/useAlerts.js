import { useEffect, useRef } from "react";

const useAlerts = (alerts, removeAlert) => {
  const lastTimeout = useRef(null);

  useEffect(() => {
    if (alerts.length > 0) {
      clearTimeout(lastTimeout.current);
      const timeoutFn = setTimeout(() => {
        const lastAlertId = alerts[alerts.length - 1].id;
        removeAlert(lastAlertId);
      }, 3000);
      lastTimeout.current = timeoutFn;
    }
  }, [alerts, removeAlert]);
};

export default useAlerts;
