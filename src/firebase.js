import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChyi5ijOmvfo1Xv7vvtGr07k9FjPceuxE",
  authDomain: "wander-c1205.firebaseapp.com",
  projectId: "wander-c1205",
  storageBucket: "wander-c1205.appspot.com",
  messagingSenderId: "878256577373",
  appId: "1:878256577373:web:265179a08e489524c926b4",
  measurementId: "G-RHG0DFSSLX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
