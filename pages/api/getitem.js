// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db } from "@/utils/firebaseusama";
import { ref, get, child } from "firebase/database";


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
  const ress = ref(db);
  // console.log(ress);
  get(child(ress, " ")).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });


}
