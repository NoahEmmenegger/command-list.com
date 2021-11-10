import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyCK6aZtfIx6h76KtK53E3R7teJMGJ47K80",
    authDomain: "command-list.firebaseapp.com",
    projectId: "command-list",
    storageBucket: "command-list.appspot.com",
    messagingSenderId: "1088606959093",
    appId: "1:1088606959093:web:1d3b4425e5e4c766f91cbc"
};

const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);

export { db }