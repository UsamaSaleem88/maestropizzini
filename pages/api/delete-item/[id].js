import { firestore } from "@/utils/dummydataFirebase";
import { deleteDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
    try {
        await deleteDoc(doc(firestore, 'menu', req.query.id));
        res.status(200).send('Deleted')
    } catch (error) {
        res.status(400).send(error)
    }
}