import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: "inventory-management-be758.firebaseapp.com",
    projectId: "inventory-management-be758",
    storageBucket: "inventory-management-be758.appspot.com",
    messagingSenderId: "199171177978",
    appId: "1:199171177978:web:b33715da18cdfe20e63843",
    measurementId: "G-PNYTG355H3"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { firestore, auth, provider };
