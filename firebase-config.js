// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAGb8EkjORtUXt6h_qzk0RJ0Gdgx1LosrU",
  authDomain: "revamp-js-2assign.firebaseapp.com",
  databaseURL: "https://revamp-js-2assign-default-rtdb.firebaseio.com",
  projectId: "revamp-js-2assign",
  storageBucket: "revamp-js-2assign.appspot.com",
  messagingSenderId: "378259731235",
  appId: "1:378259731235:web:48b3c98eac2957e0525296",
  measurementId: "G-ZSEDPTTH9S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
