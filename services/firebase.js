import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJxkX4-qK9Ui1VgTqzbuHDhyOo_odxnjk",
    authDomain: "cmd-computer.firebaseapp.com",
    projectId: "cmd-computer",
    storageBucket: "cmd-computer.appspot.com",
    messagingSenderId: "157491496239",
    appId: "1:157491496239:web:b7a0e6c85d76e1ff7a0dda",
    measurementId: "G-52F90XPCX0"
  };
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
const firestore = firebase.firestore();// database
const fireStorage = firebase.storage();
const fireAuth= firebase.auth();

export {
  firestore,// Database
  fireStorage,// storage
  fireAuth // authentication 
}