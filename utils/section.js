import { firestore, firebase } from "./firebase";

const update = async (newSection) => {
    firestore.collection("sections").doc(newSection.id).update({
        title: newSection.title,
    });
};

const add = async (pageUid, newSection) => {
    return new Promise((res, rej) => {
        firestore
            .collection("sections")
            .add(newSection)
            .then((result) => {
                firestore
                    .collection("pages")
                    .doc(pageUid)
                    .update({
                        sections: firebase.firestore.FieldValue.arrayUnion(
                            firestore.doc(`sections/${result.id}`)
                        ),
                    })
                    .then(() => {
                        res(result.id);
                    });
            });
    });
};

const deleteSection = async (pageUid, sectionId) => {
    return new Promise((res, rej) => {
        firestore
            .collection("pages")
            .doc(pageUid)
            .update({
                sections: firebase.firestore.FieldValue.arrayRemove(
                    firestore.doc(`sections/${sectionId}`)
                ),
            })
            .then(() => {
                firestore
                    .collection("sections")
                    .doc(sectionId)
                    .delete()
                    .then(() => res(sectionId));
            });
    });
};

export { update, add, deleteSection };
