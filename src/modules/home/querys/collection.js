import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { errorAlert, serverErrorAlert } from "../../../helpers/alert";

export const getCollectionsQuery = async (id) => {
    try {
        const colRef = collection(db, 'collections');

        const q = query(colRef, where('createdBy', '==', id));
        const querySnapshots = await getDocs(q);

        return querySnapshots.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        serverErrorAlert();
    }
}

export const getCollectionQuery = async (id, docId) => {
    try {
        const docRef = doc(db, 'collections', docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().createdBy === id) {
            return {
                id: docSnap.id,
                ...docSnap.data()
            };
        }
        return {};
    } catch (error) {
        serverErrorAlert();
    }
}


export const createCollectionQuery = async (collectionName, user) => {
    try {
        const colRef = collection(db, 'collections');

        const q = query(colRef, where('name', '==', collectionName), where('createdBy', '==', user.uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            errorAlert("Collection name must be unique!");
            return false;
        }

        const newDoc = {
            name: collectionName,
            createdBy: user.uid,
            createdAt: new Date(),
        };

        const docRef = await addDoc(colRef, newDoc);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const docData = {
                id: docSnap.id,
                ...docSnap.data(),
            };
            return docData;
        }

        return null;
    } catch (error) {
        serverErrorAlert();
    }
}



export const editCollectionQuery = async (collectionName, user, docId) => {
    try {
        const colRef = collection(db, 'collections');

        const q = query(colRef, where('name', '==', collectionName), where('createdBy', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const docs = querySnapshot.docs
            .filter(doc => doc.id !== docId) // Replace with the ID you want to exclude
            .map(doc => ({ id: doc.id, ...doc.data() }));

        if (docs.length) {
            errorAlert("Collection name must be unique!");
            return
        }

        const docRef = doc(db, 'collections', docId);

        await updateDoc(docRef, { name: collectionName });

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const docData = {
                id: docSnap.id,
                ...docSnap.data(),
            };
            return docData;
        }

        return null;
    } catch (error) {
        serverErrorAlert();
    }
}

export const deleteCollectionQuery = async (docId, user_id) => {
    try {

        const docRef = doc(db, 'collections', docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().createdBy === user_id) {
            await deleteDoc(docRef);
        } else {
            serverErrorAlert();
        }

        return true;
    } catch (error) {
        serverErrorAlert();
    }
}

export const createPasteQuery = async (user, docId, paste) => {
    try {
        const docRef = doc(db, 'collections', docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().createdBy === user.uid) {
            const pastesCollectionRef = collection(docRef, "pastes");

            const subDocRef = await addDoc(pastesCollectionRef, {
                createdAt: new Date(),
                paste
            });

            const subDocSnap = await getDoc(subDocRef);

            return {
                id: subDocSnap.id,
                ...subDocSnap.data(),
            };
        }

        errorAlert('Please reload the page!');
        return false;
    } catch (error) {
        serverErrorAlert();
    }
}


export const getPastesQuery = async (user, docId) => {
    try {
        const docRef = doc(db, 'collections', docId);
        const docSnap = await getDoc(docRef);


        if (docSnap.exists() && docSnap.data().createdBy === user.uid) {
            const pastesCollectionRef = collection(docRef, "pastes");

            const q = query(pastesCollectionRef, orderBy("createdAt", "desc")); // Change "desc" to "asc" if you want ascending order

            const subDocSnap = await getDocs(q);
            
            return subDocSnap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        }

        return [];
    } catch (error) {
        serverErrorAlert();
    }
}

export const deletePasteQuery = async (user, docId, pasteId) => {
    try {
        const docRef = doc(db, 'collections', docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().createdBy === user.uid) {
            const pastesCollectionRef = doc(docRef, 'pastes', pasteId);

            await deleteDoc(pastesCollectionRef);
            
            return true;
        }

        errorAlert('Please reload the page!');
        return false;
    } catch (error) {
        serverErrorAlert();
    }
}