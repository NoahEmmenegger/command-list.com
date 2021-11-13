import { firestore } from "./firebase";

const getUsers = async () => {
  const snapshot = await firestore.collection("users").get();
  return snapshot.docs.map(doc => {
      return doc.data()
  })
};

const getUserById = async (userId) => {
  const user = await firestore.collection("users").where('userUid', '==', userId).limit(1).get();
  console.log(userId)
  return user.docs[0].data();

};

const addNewUser = async (email, uid) => {
  return await firestore.collection("users").add({email, userUid: uid})
}

export { getUsers, getUserById, addNewUser };