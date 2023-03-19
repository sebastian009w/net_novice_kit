import { firestore } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  QuerySnapshot,
} from "firebase/firestore";

export const saveNotes = (title: string, description: string, image: string) =>
  addDoc(collection(firestore, "notes"), { title, description, image });

export const getNotes = () => getDocs(collection(firestore, "notes"));

export const realTimeDate = (
  callback: (querySnapshot: QuerySnapshot) => void
) => onSnapshot(collection(firestore, "notes"), callback);
