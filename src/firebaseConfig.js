
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



// apiKey: "AIzaSyDvlKqFQWXtixaq8mzrxvzCAfwT2WFPGWw",
// authDomain: "backend-burguesia.firebaseapp.com",
// projectId: "backend-burguesia",
// storageBucket: "backend-burguesia.firebasestorage.app",
// messagingSenderId: "1065710287543",
// appId: "1:1065710287543:web:4ec8f17733a023f419ab32"