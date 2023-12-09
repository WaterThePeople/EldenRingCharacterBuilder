import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './SaveSelectionPage.sass';
import Title from '../../../components/Title';
import CardScroll from '../../../components/CardScroll';
import NewSaveButton from '../../../components/NewSaveButton';
import SaveFileButton from '../../../components/SaveFileButton';
import { getAuth } from 'firebase/auth'
import { getSaves, createNewSave, removeSave } from '../../../../firebase';
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

export default function SaveSelectionPage() {

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const auth = getAuth();
  const user = auth.currentUser;

  const [saves, setSaves] = useState([]);

  const [saveFiles, setSaveFiles] = useState([]);

  const [lastID, setLastID] = useState(0);

  const getData = async () => {
    setSaves(await getSaves())
  }

  const addSave = () => {
    createNewSave(
      lastID,
      user?.email,
      'SAVE FILE',
    )
    getData();
  };

  const deleteSave = async (save_id) => {
    try {
      await removeSave(save_id);
    }
    catch (error) {
      console.log(error)
    }
    finally {
      getData();
    }
  }

  const moveTo = (path, saveFile) => {
    navigation.navigate(path,
      {
        saveFile: saveFile,
      });
  };

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  useEffect(() => {
    setSaveFiles([]);
    saves?.map((item, index) => {
      if (user?.email === item?.user_email) {
        setSaveFiles(saveFiles => [...saveFiles, item])
      }
      if(index+1===saves.length)
      {
        setLastID(saves[index].save_id+1)
      }
    })
  }, [saves]);

  return (
    <View style={style.container}>
      <Title name={'Characters'}></Title>
      <CardScroll style={style.card}>
        {saveFiles.map((item, index) => (
          <SaveFileButton
            label={item.save_name}
            key={index}
            onClick={() => moveTo('BuildSelectionScreen', item?.save_id)}
            onDelete={() => deleteSave(item?.save_id)}
          />
        ))}
      </CardScroll>
      <NewSaveButton label="ADD A NEW SAVE" plusIcon onClick={addSave} />
    </View>
  );
}
