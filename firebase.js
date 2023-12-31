import { initializeApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import {
  collection,
  getFirestore,
  firebase,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAySr3W-pEHCC3_VhnbqZ5wkk8Jftps5HE',
  authDomain: 'eldenringcharacterbuilder.firebaseapp.com',
  projectId: 'eldenringcharacterbuilder',
  storageBucket: 'eldenringcharacterbuilder.appspot.com',
  messagingSenderId: '1059850215559',
  appId: '1:1059850215559:web:cb084318ecc10f14011822',
  databaseURL:
    'https://eldenringcharacterbuilder-default-rtdb.europe-west1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getDatabase(app);

const firestore = getFirestore();

const getSaves = async () => {
  try {
    const snapshot = await getDocs(collection(firestore, 'user_saves'));
    const saves = snapshot.docs.map(doc => doc.data());
    return saves;
  } catch (error) {
    console.log(error);
  }
};

const removeSave = async save_id => {
  try {
    const saveRef = doc(firestore, 'user_saves', save_id.toString());
    const classesRef = doc(firestore, 'user_saves_classes', save_id.toString());
    const weaponsRef = doc(firestore, 'user_saves_weapons', save_id.toString());
    const armorRef = doc(firestore, 'user_saves_armor', save_id.toString());
    const talismansRef = doc(firestore, 'user_saves_talismans', save_id.toString());
    const spellsRef = doc(firestore, 'user_saves_spells', save_id.toString());
    const characterRef = doc(firestore, 'published_characters', save_id.toString());

    await deleteDoc(saveRef);
    await deleteDoc(classesRef);
    await deleteDoc(weaponsRef);
    await deleteDoc(armorRef);
    await deleteDoc(talismansRef);
    await deleteDoc(spellsRef);
    await deleteDoc(characterRef);
  } catch (error) {
    console.log(error);
  }
};

const getSave = async save_id => {
  try {
    const snapshot = doc(firestore, 'user_saves', save_id.toString());
    const save = await getDoc(snapshot);
    return save.data();
  } catch (error) {
    console.log(error);
  }
};

const createNewSave = (save_id, user_email, save_name) => {
  const savesRef = doc(firestore, 'user_saves', save_id.toString());
  const classesRef = doc(firestore, 'user_saves_classes', save_id.toString());
  const weaponsRef = doc(firestore, 'user_saves_weapons', save_id.toString());
  const armorRef = doc(firestore, 'user_saves_armor', save_id.toString());
  const talismansRef = doc(firestore, 'user_saves_talismans', save_id.toString());
  const spellsRef = doc(firestore, 'user_saves_spells', save_id.toString());

  setDoc(savesRef, {
    save_id: save_id,
    save_name: save_name,
    user_email: user_email,
    isPublic: false,
  });

  setDoc(classesRef, {
    save_id: save_id,
  });

  setDoc(weaponsRef, {
    save_id: save_id,
  });

  setDoc(armorRef, {
    save_id: save_id,
  });

  setDoc(talismansRef, {
    save_id: save_id,
  });

  setDoc(spellsRef, {
    save_id: save_id,
  });
};

const editSaveName = (save_id, user_email, save_name) => {
  const savesRef = doc(firestore, 'user_saves', save_id.toString());

  updateDoc(savesRef, {
    save_name: save_name,
  });
}

const editPublishedSaveName = (save_id, user_email, save_name) => {
  const characterRef = doc(firestore, 'published_characters', save_id.toString());

  updateDoc(characterRef, {
    save_name: save_name,
  });
}

const publishSave = async (save_id, save_name, user_email, user_name) => {
  const characterRef = doc(firestore, 'published_characters', save_id.toString());
  const savesRef = doc(firestore, 'user_saves', save_id.toString());

  setDoc(characterRef, {
    save_id: save_id,
    save_name: save_name,
    user_email: user_email,
    user_name: user_name,
    ratings: [],
  });

  updateDoc(savesRef, {
    isPublic: true,
  });
};

const makeSavePrivate = async (save_id) => {
  const characterRef = doc(firestore, 'published_characters', save_id.toString());
  const savesRef = doc(firestore, 'user_saves', save_id.toString());

  await deleteDoc(characterRef);

  updateDoc(savesRef, {
    isPublic: false,
  });
};

const getPublishedCharacters = async () => {
  try {
    const snapshot = await getDocs(collection(firestore, 'published_characters'));
    const saves = snapshot.docs.map(doc => doc.data());
    return saves;
  } catch (error) {
    console.log(error);
  }
};

const rateCharacter = async (save_id, ratings) => {
  const characterRef = doc(firestore, 'published_characters', save_id.toString());
  updateDoc(characterRef, {
    ratings: ratings,
  });
}

const getData = (index, setState) => {
  const data = ref(db, index);
  onValue(data, snapshot => {
    setState(snapshot.val());
  });
};

const selectClass = (save_id, array, stats) => {
  const savesRef = doc(firestore, 'user_saves_classes', save_id.toString());

  updateDoc(savesRef, {
    class: array,
    stats: stats,
  });
};

const getCurrentClass = async save_id => {
  try {
    const snapshot = doc(firestore, 'user_saves_classes', save_id.toString());
    const data = await getDoc(snapshot);
    return data.data();
  } catch (error) {
    console.log(error);
  }
};

const selectWeapon = (save_id, hand, array) => {
  const savesRef = doc(firestore, 'user_saves_weapons', save_id.toString());

  updateDoc(savesRef, {
    [hand]: array,
  });
};

const getCurrentWeapons = async (save_id) => {
  try {
    const snapshot = doc(firestore, 'user_saves_weapons', save_id.toString());
    const data = await getDoc(snapshot);
    return data.data();
  } catch (error) {
    console.log(error);
  }
};

const deleteWeapon = (save_id, hand) => {
  const savesRef = doc(firestore, 'user_saves_weapons', save_id.toString());

  updateDoc(savesRef, {
    [hand]: '',
  });
};

const selectArmor = (save_id, armor, array) => {
  const savesRef = doc(firestore, 'user_saves_armor', save_id.toString());

  updateDoc(savesRef, {
    [armor]: array,
  });
};

const deleteArmor = (save_id, armor) => {
  const savesRef = doc(firestore, 'user_saves_armor', save_id.toString());

  updateDoc(savesRef, {
    [armor]: '',
  });
};

const getCurrentArmor = async (save_id) => {
  try {
    const snapshot = doc(firestore, 'user_saves_armor', save_id.toString());
    const data = await getDoc(snapshot);
    return data.data();
  } catch (error) {
    console.log(error);
  }
};

const selectTalisman = (save_id, slot, array, current_talisman) => {
  const savesRef = doc(firestore, 'user_saves_talismans', save_id.toString());

  if (array?.talisman_name === 'Moon Of Nokstella') {
    const spellsRef = doc(firestore, 'user_saves_spells', save_id.toString());

    updateDoc(spellsRef, {
      hasMoonOfNokstella: true,
    });
  }
  else if (current_talisman?.talisman_name === 'Moon Of Nokstella') {
    const spellsRef = doc(firestore, 'user_saves_spells', save_id.toString());

    updateDoc(spellsRef, {
      hasMoonOfNokstella: false,
      slot11: '',
      slot12: '',
    });
  }

  updateDoc(savesRef, {
    [slot]: array,
  });
};

const deleteTalisman = (save_id, slot, array) => {
  const savesRef = doc(firestore, 'user_saves_talismans', save_id.toString());

  if (array?.talisman_name === 'Moon Of Nokstella') {
    const spellsRef = doc(firestore, 'user_saves_spells', save_id.toString());

    updateDoc(spellsRef, {
      hasMoonOfNokstella: false,
      slot11: '',
      slot12: '',
    });
  }

  updateDoc(savesRef, {
    [slot]: '',
  });
};

const getCurrentTalismans = async (save_id) => {
  try {
    const snapshot = doc(firestore, 'user_saves_talismans', save_id.toString());
    const data = await getDoc(snapshot);
    return data.data();
  } catch (error) {
    console.log(error);
  }
};

const selectSpell = (save_id, slot, array) => {
  const savesRef = doc(firestore, 'user_saves_spells', save_id.toString());

  updateDoc(savesRef, {
    [slot]: array,
  });
};

const deleteSpell = (save_id, slot) => {
  const savesRef = doc(firestore, 'user_saves_spells', save_id.toString());

  updateDoc(savesRef, {
    [slot]: '',
  });
};

const getCurrentSpells = async (save_id) => {
  try {
    const snapshot = doc(firestore, 'user_saves_spells', save_id.toString());
    const data = await getDoc(snapshot);
    return data.data();
  } catch (error) {
    console.log(error);
  }
};

export {
  auth,
  db,
  getSaves,
  getSave,
  createNewSave,
  editSaveName,
  getData,
  selectClass,
  removeSave,
  selectWeapon,
  getCurrentClass,
  getCurrentWeapons,
  deleteWeapon,
  selectArmor,
  deleteArmor,
  getCurrentArmor,
  selectTalisman,
  deleteTalisman,
  getCurrentTalismans,
  selectSpell,
  deleteSpell,
  getCurrentSpells,
  publishSave,
  editPublishedSaveName,
  makeSavePrivate,
  getPublishedCharacters,
  rateCharacter,
};
