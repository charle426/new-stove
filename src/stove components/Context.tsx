// Context.tsx
import React, { useContext, } from "react";
import { collection, DocumentData, getDocs,} from "firebase/firestore";
import { db } from "../firebaseConfig";
      type ValueProp = {
        id: string;
        title: string;
        content: string;
        file: string;
        uploadTime: Date;
      }[];


type AppProp = {
  server: ValueProp | null
      }

type ContextProp = {
  children: React.ReactNode;
};

export const AppContext = React.createContext<AppProp | undefined>(undefined); //create the context API
//function body
export default function Context({ children }: ContextProp) {
  const [server, setServer] = React.useState<ValueProp | null>(null);
  const blogsCollection = collection(db, "blogs");
    React.useEffect(() => {
      const fetchData = async () => {
        const data = await getDocs(blogsCollection);
        return setServer(
          data.docs.map((doc: DocumentData) => ({
            id: doc.id,
            title: doc.data().title,
            content: doc.data().content,
            file: doc.data().file,
            uploadTime: doc.data().uploadTime,
          }))
        );
      };
      fetchData();
    }, []);
  return (
    <AppContext.Provider value={{server}}>
      {children}
    </AppContext.Provider>
  );
}


export const useGlobalContext = () => {
  return useContext(AppContext);
};