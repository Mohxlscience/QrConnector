import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2wcYnWc2HQuPp2nixNi49hAjgK3WQOQM",
  authDomain: "qrconnector-cfcd3.firebaseapp.com",
  projectId: "qrconnector-cfcd3",
  storageBucket: "qrconnector-cfcd3.firebasestorage.app",
  messagingSenderId: "682931039865",
  appId: "1:682931039865:web:2bc1d0bce61edfebb6aea8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, query, onSnapshot, addDoc, serverTimestamp };