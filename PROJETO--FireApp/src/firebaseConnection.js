import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHfm53854JalWT_0kC8GaLKtakaS0Nisk",
  authDomain: "fire-app-6a1de.firebaseapp.com",
  projectId: "fire-app-6a1de",
  storageBucket: "fire-app-6a1de.appspot.com",
  messagingSenderId: "1038952169523",
  appId: "1:1038952169523:web:75ed81fc5c0413ae38a346"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };
