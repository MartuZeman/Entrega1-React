// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTON_APIKEY,
  authDomain: "react-entrega-b359f.firebaseapp.com",
  projectId: import.meta.env.VITE_FIRESTON_PROYECT_ID,
  storageBucket: "react-entrega-b359f.firebasestorage.app",
  messagingSenderId: "25378207633",
  appId: import.meta.env.VITE_FIRESTON_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase init", app);

const db = getFirestore(app);

export async function getProducts() {
  const productsRef = collection(db, "products");
  const documentsSnapShot = await getDocs(productsRef);
  const documents = documentsSnapShot.docs;
  const data = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  console.log(data);

  return data;
}

export async function getProductById(idParam) {
  const documentRef = doc(db, "products", idParam);
  const documentsSnapShot = await getDoc(documentRef);
  const docData = documentsSnapShot.data();
  return { id: documentsSnapShot.id, ...docData };
}

export async function getProductByCategory(catParam) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", catParam));
  const documentsSnapShot = await getDocs(q);
  const documents = documentsSnapShot.docs;
  const data = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return data;
}

export async function createBuyOrder(orderData) {
  const ordersRef = collection(db, "orders");

  const newOrderDoc = await addDoc(ordersRef, orderData);
  return newOrderDoc;
}

// export async function exportProductsToFirestone() {

//     for(let item of products){
//         delete item.id;
//         const idDoc = await addDoc(collection(db,"products"),item)
//         console.log("Creado documento:",idDoc)
//     }

//     return;
// }

export default app;
