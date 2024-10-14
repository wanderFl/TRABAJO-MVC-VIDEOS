import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyChyi5ijOmvfo1Xv7vvtGr07k9FjPceuxE",
  // authDomain: "wander-c1205.firebaseapp.com",
  // projectId: "wander-c1205",
  // storageBucket: "wander-c1205.appspot.com",
  // messagingSenderId: "878256577373",
  // appId: "1:878256577373:web:265179a08e489524c926b4",
  // measurementId: "G-RHG0DFSSLX"
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
