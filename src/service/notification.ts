// firebase-config.js
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDlWP0ZRbmUb197BqAucJONjg6QIDrVI9w",
  authDomain: "tokenthieves-89b7b.firebaseapp.com",
  projectId: "tokenthieves-89b7b",
  storageBucket: "tokenthieves-89b7b.firebasestorage.app",
  messagingSenderId: "592179471442",
  appId: "1:592179471442:web:9a9a26ed56ebd886452b8b",
  measurementId: "G-8C4QCVZDVG",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging };
