import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCXBnZyXcGw1PjECgiB79HFv7tSzM180Q",
  authDomain: "food-app-1137f.firebaseapp.com",
  projectId: "food-app-1137f",
  storageBucket: "food-app-1137f.appspot.com",
  messagingSenderId: "554387525306",
  appId: "1:554387525306:web:0081e1e4003ee1f4c4fc83",
  measurementId: "G-1DBZPGR85P",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

export const db = getFirestore(app);
