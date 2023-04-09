import { db } from "@/utils/firebase";
import { collection, addDoc } from "firebase/firestore";
export default async function handler(req,res) {

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "pizzas"), req.body);
    res.status(200).json({...req.body,id:docRef.id})
}