import  firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB9DvyMSRUeoyhAWvuZE-PAmYjsYe8oKnU",
    authDomain: "react-firebase-crud-ebcc1.firebaseapp.com",
    databaseURL: "https://react-firebase-crud-ebcc1-default-rtdb.firebaseio.com",
    projectId: "react-firebase-crud-ebcc1",
    storageBucket: "react-firebase-crud-ebcc1.appspot.com",
    messagingSenderId: "914508084916",
    appId: "1:914508084916:web:0bb816c6c137d77edbc9e1"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();