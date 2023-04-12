const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");
const { getStorage } = require("firebase/storage");

const firebaseConfig = {
    apiKey: "AIzaSyDrh-KN_MrbYGwOSnG9S3_qMVg5tuB52Ug",
    authDomain: "maestropizzini.firebaseapp.com",
    projectId: "maestropizzini",
    storageBucket: "maestropizzini.appspot.com",
    messagingSenderId: "1073186910756",
    appId: "1:1073186910756:web:72161cd902544a523f9eb1",
    measurementId: "G-T1QHQC68RP",
    databaseuURL: "https://maestropizzini-default-rtdb.firebaseio.com"
};

initializeApp(firebaseConfig)
const db = getDatabase()
const storage = getStorage()

export { db, storage }