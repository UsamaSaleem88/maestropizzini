import { firestore } from "@/utils/dummydataFirebase";
import { collection, addDoc } from "firebase/firestore";
export default async function handler(req,res) {

   if(req.body.name !== undefined) {
       // Add a new document with a generated id.
       const docRef = await addDoc(collection(firestore, "menu"), req.body);
       res.status(200).json({ ...req.body, id: docRef.id })
   }else{
       res.status(400).json({msg:'Name is required'})
   }
}