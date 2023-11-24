import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAySr3W-pEHCC3_VhnbqZ5wkk8Jftps5HE",
  authDomain: "eldenringcharacterbuilder.firebaseapp.com",
  projectId: "eldenringcharacterbuilder",
  storageBucket: "eldenringcharacterbuilder.appspot.com",
  messagingSenderId: "1059850215559",
  appId: "1:1059850215559:web:cb084318ecc10f14011822"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export {auth};