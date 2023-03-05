import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUNCxF5mtAWC2Ky3w0NpYjnzW3DONMDSw",
  authDomain: "miniblog-93899.firebaseapp.com",
  projectId: "miniblog-93899",
  storageBucket: "miniblog-93899.appspot.com",
  messagingSenderId: "62695598229",
  appId: "1:62695598229:web:0d25ed0629f9fd4f07139c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };