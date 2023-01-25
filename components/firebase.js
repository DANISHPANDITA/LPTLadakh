// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2qXu4fvHLu8IMXmn107SDidXE2iDVmic",
  authDomain: "lptwebapp.firebaseapp.com",
  databaseURL: "https://lptwebapp-default-rtdb.firebaseio.com",
  projectId: "lptwebapp",
  storageBucket: "lptwebapp.appspot.com",
  messagingSenderId: "577965230932",
  appId: "1:577965230932:web:f2203acf18ab2d17d8d6c1",
  measurementId: "G-H9P9J79",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
