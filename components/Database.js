import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDFBmSgerG2UZZDehX_-WiTgnGiBodnRQ",
  authDomain: "vereinsmanager-fb746.firebaseapp.com",
  projectId: "vereinsmanager-fb746",
  storageBucket: "vereinsmanager-fb746.appspot.com",
  messagingSenderId: "1008834449836",
  appId: "1:1008834449836:web:9af8f638dfbfebb1e46a09",
  measurementId: "G-FJJN9H24KM",
};
initializeApp(firebaseConfig);

const db = getFirestore();
export default db;
