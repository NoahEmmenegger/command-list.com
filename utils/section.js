import { firestore, firebase } from "./firebase";

const update = async (newSection) => {
  firestore.collection("sections").doc(newSection.id).update({
    title: newSection.title,
  });
};

const add = async (pageUid, newSection) => {
  return new Promise((res, rej) => {
    firestore.collection("sections").add(newSection).then(result => {
      firestore.collection("pages").doc(pageUid).update({
        sections: firebase.firestore.FieldValue.arrayUnion(firestore.doc(`sections/${result.id}`))
      }).then(() => {
        res(result.id)
      })
    });
  })
};

export { update, add };
