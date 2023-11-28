import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './SaveSelectionPage.sass';
import Title from '../../components/Title';
import CardScroll from '../../components/CardScroll';
import NewSaveButton from '../../components/NewSaveButton';
import SaveFileButton from '../../components/SaveFileButton';
import DefaultTextInput from '../../components/DefaultTextInput';
import { getAuth } from 'firebase/auth'
import { writeDataNewSave } from '../../../firebase';
import { getData } from '../../../firebase';

export default function SaveSelectionPage({ route, navigation }) {

  const auth = getAuth();
  const user = auth.currentUser;

  const [saves, setSaves] = useState([])

  const [saveFiles, setSaveFiles] = useState([]);

  const addSave = () => {
    writeDataNewSave(
      saves?.data?.length > 0 ? saves?.data?.length : 0,
      user?.email,
      saves?.data?.length > 0 ? saves?.data?.length : 0,
      'SAVE FILE'
    )
  };

  const removeSave = () => {
  };

  const moveTo = (path, userEmail, arrayLength, saveName) => {
    navigation.navigate(path,
      {
        save_name: saveName,
        email: userEmail,
        length: arrayLength,
      });
  };

  useEffect(() => {
    getData('6', setSaves)
  }, []);

  useEffect(() => {
    setSaveFiles([]);
    saves?.data?.map((item) => {
      if (user?.email === item?.user_email) {
        setSaveFiles(saveFiles => [...saveFiles, item])
      }
    })
  }, [saves]);

  return (
    <View style={style.container}>
      <Title name={user ? user.displayName : 'Account name'}></Title>
      <CardScroll style={style.card}>
        {saveFiles.map((item, index) => (
          <SaveFileButton
            label={item.save_name}
            key={index}
            onClick={() => moveTo('BuildSelectionScreen', user?.email, item?.save_id, item?.save_name)}
            onDelete={() => removeSave()}
          />
        ))}
      </CardScroll>
      <NewSaveButton label="ADD A NEW SAVE" plusIcon onClick={addSave} />
    </View>
  );
}
