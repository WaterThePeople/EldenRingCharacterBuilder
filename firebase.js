import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { collection, getFirestore, getDocs, doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAySr3W-pEHCC3_VhnbqZ5wkk8Jftps5HE",
  authDomain: "eldenringcharacterbuilder.firebaseapp.com",
  projectId: "eldenringcharacterbuilder",
  storageBucket: "eldenringcharacterbuilder.appspot.com",
  messagingSenderId: "1059850215559",
  appId: "1:1059850215559:web:cb084318ecc10f14011822",
  databaseURL: 'https://eldenringcharacterbuilder-default-rtdb.europe-west1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getDatabase(app);

const firestore = getFirestore();

const getSaves = async () => {
  try {
    const snapshot = await getDocs(collection(firestore, 'user_saves_list'))
    const saves = snapshot.docs.map(doc => doc.data());
    return saves
  } catch (error) {
    console.log(error)
  }
}

const removeSave = async (save_id) => {
  try {
    const saveRef = doc(firestore, 'user_saves', save_id.toString())
    const saveListRef = doc(firestore, 'user_saves_list', save_id.toString())

    await deleteDoc(saveRef);
    await deleteDoc(saveListRef);
  } catch (error) {
    console.log(error)
  }
}

const getSave = async (save_id) => {
  try {
    const snapshot = doc(firestore, 'user_saves', save_id.toString())
    const save = await getDoc(snapshot)
    return save.data()
  } catch (error) {
    console.log(error)
  }
}

const createNewSave = (save_id, user_email, save_name) => {
  const savesRef = doc(firestore, 'user_saves', save_id.toString())
  const savesListRef = doc(firestore, 'user_saves_list', save_id.toString())

  setDoc(savesRef, {
    save_id: save_id,
    save_name: save_name,
    user_email: user_email,
  })

  setDoc(savesListRef, {
    save_id: save_id,
    save_name: save_name,
    user_email: user_email,
  })
}

const editSaveName = (save_id, user_email, save_name) => {
  const savesRef = doc(firestore, 'user_saves', save_id.toString())
  const savesListRef = doc(firestore, 'user_saves_list', save_id.toString())

  updateDoc(savesRef, {
    save_id: save_id,
    save_name: save_name,
    user_email: user_email,
  })

  updateDoc(savesListRef, {
    save_id: save_id,
    save_name: save_name,
    user_email: user_email,
  })
}

const getData = (index, setState) => {
  const data = ref(db, index);
  onValue(data, (snapshot) => {
    setState(snapshot.val());
  })
}

const selectClass = (save_id, array) => {
  const savesRef = doc(firestore, 'user_saves', save_id.toString())

  updateDoc(savesRef, {
    'class': array,
  })
}


export { auth, db, getSaves, getSave, createNewSave, editSaveName, getData, selectClass, removeSave };