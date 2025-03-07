
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Replace these with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCPvV5l3ZrJHvBIEpH9_gsFJcieqQ2vq9w",
  authDomain: "contact-form-demo-9c3c2.firebaseapp.com",
  projectId: "contact-form-demo-9c3c2",
  storageBucket: "contact-form-demo-9c3c2.appspot.com",
  messagingSenderId: "361195598818",
  appId: "1:361195598818:web:8edba22f8b23c64ce24de4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
