import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, onValue, set } from 'firebase/database';

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

const getData = (index, setState) => {
  const data = ref(db, index);
  onValue(data, (snapshot) => {
    setState(snapshot.val());
  })
}

const writeData =
  (
    entry_id,
    user_email,
    save_id,
    save_name,
    class_name,
    weapon_r1,
    weapon_r2,
    weapon_r3,
    weapon_l1,
    weapon_l2,
    weapon_l3,
    helm_slot,
    armor_slot,
    gauntlets_slot,
    greaves_slot,
    amulet_1,
    amulet_2,
    amulet_3,
    amulet_4,
  ) => {
    set(ref(db, '6/data/' + entry_id),
      {
        user_email: user_email,
        save_id: save_id,
        save_name: save_name,
        class_name: class_name,
        weapon_r1: weapon_r1,
        weapon_r2: weapon_r2,
        weapon_r3: weapon_r3,
        weapon_l1: weapon_l1,
        weapon_l2: weapon_l2,
        weapon_l3: weapon_l3,
        helm_slot: helm_slot,
        armor_slot: armor_slot,
        gauntlets_slot: gauntlets_slot,
        greaves_slot: greaves_slot,
        amulet_1: amulet_1,
        amulet_2: amulet_2,
        amulet_3: amulet_3,
        amulet_4: amulet_4,
      })
  }

const writeDataNewSave = (entry_id, user_email, save_id, save_name,) => {
  set(ref(db, '6/data/' + entry_id),
    {
      user_email: user_email,
      save_id: save_id,
      save_name: save_name,
    });
}

const writeDataEditSaveName = (entry_id, user_email, save_id, save_name,) => {
  set(ref(db, '6/data/' + entry_id),
    {
      user_email: user_email,
      save_id: save_id,
      save_name: save_name,
    });
}


export { auth, db, getData, writeData, writeDataNewSave, writeDataEditSaveName };