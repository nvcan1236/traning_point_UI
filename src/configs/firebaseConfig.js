import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQ2CvqhXynezxbva9-Vy1vWgbzzVCHMg0",
    authDomain: "training-point-70ac7.firebaseapp.com",
    databaseURL: "https://training-point-70ac7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "training-point-70ac7",
    storageBucket: "training-point-70ac7.appspot.com",
    messagingSenderId: "294087893529",
    appId: "1:294087893529:web:206cd7dccde647b2fc4088",
    measurementId: "G-7BJ2CGGELC"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};
export default app;
