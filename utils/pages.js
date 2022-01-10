import { firestore } from "../utils/firebase/clientApp";

const getPageBySlug = async (slug) => {
    const page = await (
        await firestore.collection("pages").doc(slug).get()
    ).data();
    if (!page) {
        return {};
    }

    return page;
};

const getPages = async () => {
    const snapshot = await firestore.collection("pages").get();
    return snapshot.docs.map((doc) => {
        return doc.data();
    });
};

const getPagesOfOwnerId = async (ownerUid) => {
    const snapshot = await firestore
        .collection("pages")
        .where("ownerUid", "==", ownerUid)
        .get();
    return snapshot.docs.map((doc) => {
        return doc.data();
    });
};

const getPageSlugs = async () => {
    const snapshot = await firestore.collection("pages").get();
    return snapshot.docs.map((doc) => {
        return doc.id;
    });
};

const createPage = async (ownerUid, title, description) => {
    let doesExist = (
        await firestore.collection("pages").doc(title.toLowerCase()).get()
    ).exists;
    if (!doesExist) {
        firestore.collection("pages").doc(title.toLowerCase()).set({
            ownerUid,
            title: title,
            description: description,
            sections: [],
        });
        return true;
    } else {
        return false;
    }
};

const updatePage = async (newPage) => {
    console.log(newPage);
    return new Promise((res, rej) => {
        firestore
            .collection("pages")
            .doc(newPage.title.toLowerCase())
            .set(newPage)
            .then(() => res(true));
    });
};

const doesPageExists = async (pageName) => {
    return !!(await (
        await firestore.collection("pages").doc(pageName).get()
    ).data());
};

export {
    getPageBySlug,
    getPages,
    getPagesOfOwnerId,
    getPageSlugs,
    createPage,
    updatePage,
    doesPageExists,
};
