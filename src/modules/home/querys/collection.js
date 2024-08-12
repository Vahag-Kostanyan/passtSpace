import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { serverErrorAlert } from "../../../helpers/alert";

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
        }else{
            serverErrorAlert();        
        }

        return true;
    } catch (error) {
        serverErrorAlert();
    }
}