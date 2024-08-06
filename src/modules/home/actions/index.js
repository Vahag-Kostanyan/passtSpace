import { db } from "../../../firebase.config";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore"; // Import necessary Firestore functions
import { errorAlert, successAlert } from "../../../helpers/alert";


export const changeCollection = (collection) => {
    const currentUrl = new URL(window.location.href);

    // Create URLSearchParams object from the current query parameters
    const queryParams = new URLSearchParams(currentUrl.search);

    // Set or update the query parameter
    queryParams.set('collection', collection);

    // Create the new URL with updated query parameters
    const newUrl = `${currentUrl.pathname}?${queryParams.toString()}`;

    // Update the URL without reloading the page
    window.history.pushState(null, '', newUrl);
}

export const createCollection = async (e, collectionName, user, closeModal) => {
    try {
        e.preventDefault();

        const colRef = collection(db, 'collections');

        const q = query(colRef, where('name', '==', collectionName), where('createdBy', '==', user.uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            errorAlert("Collection name must be unique!");
            return
        }

        // Prepare document data
        const newDoc = {
            name: collectionName,
            createdBy: user.uid,
            createdAt: new Date(),
        };

        // Add document to the collection
        const docRef = await addDoc(colRef, newDoc);
        successAlert('Created Successfully');
        changeCollection(docRef.id);
        closeModal();
    } catch (error) {
        errorAlert("Something want wrong tray again later!");
    }
}

export const getCollections = async (user) => {
    try {
        const colRef = collection(db, 'collections');

        const q = query(colRef, where('createdBy', '==', user.uid));
        const querySnapshots = await getDocs(q);

        return querySnapshots.docs.map(doc => ({
            id: doc.id, // Document ID
            ...doc.data() // Document data
          }));
    } catch (error) {
        console.log('error', error);
        
    }
}