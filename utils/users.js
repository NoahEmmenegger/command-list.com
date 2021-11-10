import { db } from "./firebase";
import { collection, getDocs } from 'firebase/firestore/lite';

const getUsers = async () => {
    const usersCol = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCol);
    return usersSnapshot.docs.map(doc => {return doc.data()});
};

export { getUsers }