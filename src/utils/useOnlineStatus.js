import { useEffect, useState } from "react";
import { useState } from "react";

export const useOnlineStatus = () => {
  //check if online

  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });


    window.addEventListener("online", () => {
        setOnlineStatus(true);
      });
  }, []);

  //boolean value

  return onlineStatus;
};
