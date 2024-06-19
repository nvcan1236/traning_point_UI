import { useEffect, useState } from "react";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../configs/firebaseConfig"; 

const useFirestore = (collectionName, condition, orderByField) => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        let q = collection(db, collectionName);
        
        if (condition) {
            q = query(q, where(condition.fieldName, condition.operator, condition.compareValue.toString()));
        }

        if (orderByField) {
            q = query(q, orderBy(orderByField, 'asc'));
        }

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const updatedDocuments = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setDocuments(updatedDocuments);
        });

        return () => unsubscribe();
    }, [collectionName, condition, orderByField]);

    return documents;
};

export default useFirestore;
