import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { userHandle } from "utils";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi7bKsMF7wxzthFg8Yn2WQvI1XSTOPVg4",
  authDomain: "instagram-clone-f396f.firebaseapp.com",
  projectId: "instagram-clone-f396f",
  storageBucket: "instagram-clone-f396f.appspot.com",
  messagingSenderId: "491066350462",
  appId: "1:491066350462:web:7cc36fe36dccecb228b12f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth,user=>{
  userHandle(user || false)
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response.user);
  } catch (error) {
    alert(error.code)
  }
};

export const logout= async()=>{
  try {
    await signOut(auth)
  } catch (error) {
    alert(error.code)
  }
}