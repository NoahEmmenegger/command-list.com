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

const getPageSlugs = async () => {
  const snapshot = await firestore.collection("pages").get();
  return snapshot.docs.map(doc => {
    return doc.id
  })
}

const createPage = async (ownerUid, title, description) => {
  console.log(ownerUid)
  let doesExist = (await firestore.collection('pages').doc(title).get()).exists
  if (!doesExist) {
    firestore.collection('pages').doc(title).set({
      ownerUid,
      title: title,
      description: description,
      sections: []
    })
    return true;
  } else {
    return false;
  }

}

export { getPageBySlug, getPages, getPageSlugs, createPage };