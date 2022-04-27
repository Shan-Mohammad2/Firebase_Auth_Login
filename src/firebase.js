
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBOQj7dKAaK9LXpLtcW3K0O38P1qnLUhJw",
  authDomain: "react-authentication-cb4fc.firebaseapp.com",
  projectId: "react-authentication-cb4fc",
  storageBucket: "react-authentication-cb4fc.appspot.com",
  messagingSenderId: "147272327359",
  appId: "1:147272327359:web:c5fe511331ffecba7d260a",
  measurementId: "G-2ZZBDWEP31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
// const analytics = getAnalytics(app);
export default app;