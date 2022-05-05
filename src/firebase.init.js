import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa-mdpYaMBY5qtJsN42f_z5MUnAOKsOKk",
  authDomain: "auto-royal-client.firebaseapp.com",
  projectId: "auto-royal-client",
  storageBucket: "auto-royal-client.appspot.com",
  messagingSenderId: "1013035834015",
  appId: "1:1013035834015:web:9ac75e3e55e33899f3e0aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
