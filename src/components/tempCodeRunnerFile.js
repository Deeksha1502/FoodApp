import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../utils/firebase";

export const Welcome = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  });

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        Welcome, {location.state?.name || user.email}!
      </h1>
    </div>
  );
};
