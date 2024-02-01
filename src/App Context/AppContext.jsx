import { createContext, useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
export const AppStore = createContext();

const AppContext = ({ children }) => {
  const collectionRef = collection(db, "images");

  const [allPhotos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const q = query(collectionRef, orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);

        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPhotos(newData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching documents:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppStore.Provider
      value={{
        allPhotos,
        loading,
        setLoading,
        collectionRef,
      }}
    >
      {children}
    </AppStore.Provider>
  );
};

export default AppContext;
