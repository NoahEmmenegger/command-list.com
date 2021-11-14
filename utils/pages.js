import { firestore } from "./firebase";

const getPageBySlug = async (slug) => {
  const page = await (await firestore.collection('pages').doc(slug).get()).data();
  if(!page) {
    return {}
  }
  return page;
}

const getPages = async () => {
  const snapshot = await firestore.collection("pages").get();
  return snapshot.docs.map(doc => {
    return doc.data()
  })
};

const createPage = async (ownerUid) => {
  console.log(ownerUid)
  let doesExist = (await firestore.collection('pages').doc('epicfreegames').get()).exists
  if (!doesExist) {
    firestore.collection('pages').doc('epicfreegames').set({
      ownerUid,
      title: "EpicFreeGames 2",
      sections: []
    })
    return true;
  } else {
    return false;
  }

}

export { getPageBySlug, getPages, createPage };