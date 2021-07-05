import firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyDA1yX2_QovQ_XFvtdJHjPeKKUADapdxX0",
    authDomain: "geometry-concept-check.firebaseapp.com",
    projectId: "geometry-concept-check",
    storageBucket: "geometry-concept-check.appspot.com",
    messagingSenderId: "437612971472",
    appId: "1:437612971472:web:0fcc5b1b755bb8de5aa5d5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase.firestore();