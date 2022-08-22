import { initializeApp } from "firebase/app";
import {
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { userHandle } from "utils";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
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
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const dbUser = await getDoc(doc(db, "users", user.uid));
    let data = {
      uid: user.uid,
      fullName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      ...dbUser.data(),
    };
    userHandle(data);
  } else {
    userHandle(false);
  }
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    console.log("Login Error " + error.code);
  }
};

export const getUserInfo = async (uname) => {

  const username = await getDoc(doc(db, "usernames", uname));

  if (username.exists()) {

    const user = (await getDoc(doc(db, "users", username.data().user_id))).data();
    return user;

  } 
  else {
    alert("Kullanıcı bulunamadı")
    throw new Error("Kullanıcı bulunamadı");
  }
};
export const register = async ({ email, password, full_name, username }) => {
  try {
    const user = await getDoc(doc(db, "usernames", username));

    if (user.exists()) {
      alert(`${username} kullanıcı adı başkası tarafından kullanılıyor.`);
    } else {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response.user) {
        await setDoc(doc(db, "usernames", username), {
          user_id: response.user.uid,
        });

        await setDoc(doc(db, "users", response.user.uid), {
          fullName: full_name,
          username: username,
          followers: [],
          following: [],
          notifications: [],
          website: "",
          bio: "",
          phoneNumber: "",
          gender: "",
          posts: 0,
        });

        await updateProfile(auth.currentUser, {
          displayName: full_name,
        });

        return response.user;
      }
    }
  } catch (err) {
    console.log(err.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error.code);
  }
};
