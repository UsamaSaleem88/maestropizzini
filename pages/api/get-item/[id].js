import { firestore } from "@/utils/dummydataFirebase"
import { getDoc, doc } from "firebase/firestore"

export default async function handler(req, res) {
    const docc = await getDoc(doc(firestore, 'menu', req.query.id));
    if (docc.exists()) {
        res.status(200).send({ ...docc.data(), id: docc.id })
    } else {
        res.status(400).send(`Doc doesn't exists`)
    }
}