import * as firebase from 'firebase'
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyDbCjm_IzII1vl9Ly0D-q9_7Gsob_caShs",
    authDomain: "willyapp-7de57.firebaseapp.com",
    projectId: "willyapp-7de57",
    storageBucket: "willyapp-7de57.appspot.com",
    messagingSenderId: "71466225963",
    appId: "1:71466225963:web:ed45e556c0c0e8d534356e",
    measurementId: "G-YRCJRZE4B6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();