import { firestore } from "./firebase";

const getPages = async () => {
  const snapshot = await firestore.collection("pages").get();
  return snapshot.docs.map(doc => {
      return doc.data()
  })
};

export { getPages };