// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQN8OBJCsw8Bbom8NDtE-IulXpGGKVVAo",
  authDomain: "table-aef7f.firebaseapp.com",
  databaseURL: "https://table-aef7f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "table-aef7f",
  storageBucket: "table-aef7f.appspot.com",
  messagingSenderId: "687021707878",
  appId: "1:687021707878:web:a2624613aac9c8fa0993a7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const database = firebase.database();

export default database;

