import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: " ",
  authDomain: " ",
  projectId: " ",
  storageBucket: "",
  messagingSenderId: " ",
  appId: " ",
  measurementId: " "
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;