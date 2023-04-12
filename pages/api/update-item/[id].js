import { firestore } from "@/utils/dummydataFirebase";
import { doc, updateDoc } from "firebase/firestore";

export default async function handler(req, res) {
    try {
        await updateDoc(doc(firestore, 'menu', req.query.id), req.body);
        res.status(200).send('Updated')
    } catch (error) {
        res.status(400).send(error)
    }
}