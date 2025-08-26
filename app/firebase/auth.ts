import {
  type User,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, db } from "./client";
import { setDoc, doc, getDoc } from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const loginWithGoogle = async (userType: "developer" | "company") => {
  try {
    const { user } = await signInWithPopup(auth, googleProvider);
    await setDoc(
      doc(db, "users", user.uid),
      {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        userType,
        createdAt: new Date(),
      },
      {
        merge: true,
      }
    );
    return user;
  } catch (error) {
    throw error;
  }
};
export const getExistingUser = async (uid: string) => {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    return userDoc.exists() ? userDoc.data() : null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
export const getUser = async () => {
  try {
    const user = auth.currentUser;
    if (!user) return null;

    const firestoreUser = await getExistingUser(user.uid);

    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName || firestoreUser?.name || "",
      imageUrl: user.photoURL || firestoreUser?.imageUrl || "",
      userType: firestoreUser.userType,
      joinedAt: firestoreUser?.joinedAt || null,
    };
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
