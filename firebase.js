// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getFirestore, 
         collection, 
         addDoc,
         getDocs,
         onSnapshot,
         deleteDoc,
         doc
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABOWQX8Dw9S_FZqV2893R6NB_T7-4BgHs",
  authDomain: "fir-javascript-crud-bd7a5.firebaseapp.com",
  projectId: "fir-javascript-crud-bd7a5",
  storageBucket: "fir-javascript-crud-bd7a5.appspot.com",
  messagingSenderId: "893066706510",
  appId: "1:893066706510:web:a42ace8afb8beff3818d1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const saveTask = (title, description) => 
    addDoc(collection(db, 'tasks'), {
        title,
        description
    });



export const onGetTasks = (callback) => onSnapshot(collection(db,'tasks'), callback);

export const deleteTask = (id) =>
    deleteDoc(doc(db, 'tasks', id));
    export const getTask = (id) => getDoc(doc(db, "tasks", id));

    export const updateTask = (id, newFields) =>
      updateDoc(doc(db, "tasks", id), newFields);
    
    export const getTasks = () => getDocs(collection(db, "tasks"));