// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgWNPQslJSkNWnX7CBMl8b5SlfBLNkF5I",
    authDomain: "dummydata-6b170.firebaseapp.com",
    projectId: "dummydata-6b170",
    storageBucket: "dummydata-6b170.appspot.com",
    messagingSenderId: "720489091383",
    appId: "1:720489091383:web:89962c087f4ecf7c090ab2",
    measurementId: "G-5CLV9JSR14"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const firestore = getFirestore();
export {firestore}