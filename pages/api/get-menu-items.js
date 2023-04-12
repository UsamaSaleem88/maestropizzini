// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { firestore } from "@/utils/dummydataFirebase"
import { collection, getDocs } from "firebase/firestore"

export default async function handler(req, res) {
  let arr = [];
  const docs = await getDocs(collection(firestore, 'menu'));
  docs.forEach((doc) => {
    arr.push({...doc.data(),id:doc.id})
    if (arr.length === docs.docs.length) {
      res.status(200).json({ data: arr });
    }
  })
}
