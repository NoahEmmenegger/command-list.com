import { firestore } from "./firebase";

const getUsers = async () => {
  const snapshot = await firestore.collection("users").get();
  return snapshot.docs.map(doc => {
      return doc.data()
  })
};

const getUserById = async (userId) => {
  return await (await firestore.collection("users").where('userUid', '==', userId).limit(1).get()).docs[0].data();

};

export { getUsers, getUserById };