// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8VtueNccN7heWUnaqfMUvPR5JsWqpzzY",
  authDomain: "create-a-twitter-website-b5571.firebaseapp.com",
  projectId: "create-a-twitter-website-b5571",
  storageBucket: "create-a-twitter-website-b5571.appspot.com",
  messagingSenderId: "633182947559",
  appId: "1:633182947559:web:2770ddc4cd7884365dfa42",
  measurementId: "G-QXXD2RVETS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyA8VtueNccN7heWUnaqfMUvPR5JsWqpzzY",
//   authDomain: "create-a-twitter-website-b5571.firebaseapp.com",
//   projectId: "create-a-twitter-website-b5571",
//   storageBucket: "create-a-twitter-website-b5571.appspot.com",
//   messagingSenderId: "633182947559",
//   appId: "1:633182947559:web:2770ddc4cd7884365dfa42",
//   measurementId: "G-QXXD2RVETS"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// export default auth;