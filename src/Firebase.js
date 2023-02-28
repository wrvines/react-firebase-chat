// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA8CqnFymc_6q21xEbuqZ3p0dZiwPsQjiQ",
	authDomain: "react-firebase-chat-60cfe.firebaseapp.com",
	projectId: "react-firebase-chat-60cfe",
	storageBucket: "react-firebase-chat-60cfe.appspot.com",
	messagingSenderId: "958113125039",
	appId: "1:958113125039:web:682c92ebb413fd15037a5a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// apiKey: process.env.REACT_APP_APIKEY,
// 	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// 	projectId: process.env.REACT_APP_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// 	appId: process.env.REACT_APP_ID,
