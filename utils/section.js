import { firestore } from "./firebase";

const update = async (newSection) => {
  console.log(newSection);
  firestore.collection("sections").doc(newSection.id).update({
    title: newSection.title,
  });
};

export { update };
