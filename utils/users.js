import { firestore } from "./firebase";

const getUsers = async () => {
  const snapshot = await firestore.collection("users").get();
  return snapshot.docs.map(doc => {
      return doc.data()
  })
};

export { getUsers };