import React, {useState} from 'react';
import {View} from 'react-native';
import style from './SaveSelectionPage.sass';
import Title from '../../components/Title';
import CardScroll from '../../components/CardScroll';
import NewSaveButton from '../../components/NewSaveButton';
import SaveFileButton from '../../components/SaveFileButton';
import DefaultTextInput from '../../components/DefaultTextInput';
import {getAuth} from 'firebase/auth'

export default function SaveSelectionPage({route,navigation}) {

  const auth = getAuth();
  const user = auth.currentUser;

  const [saveFiles, setSaveFiles] = useState([
    {name: '123456789123456789123456789', id: 1},
    {name: 'SAVE FILE 2', id: 2},
    {name: 'Water The People testowanie obcinania znakow', id: 3},
  ]);

  const addSave = () => {
    setSaveFiles(current => [
      ...current,
      {name: 'EMPTY SAVE FILE ', id: saveFiles.length + 1},
    ]);
  };

  const removeSave = id => {
    setSaveFiles(saveFiles.filter(item => item.id !== id));
  };

  const moveTo = (path,id,save,savesArray) => {
    navigation.navigate(path, {
      id: id,
      save: save,
      savesArray: savesArray,
    });
  };

  return (
    <View style={style.container}>
      <Title name={user ? user.displayName : 'Account name'}></Title>
      <CardScroll style={style.card}>
        {saveFiles.map((item, index) => (
          <SaveFileButton
            label={item.name}
            key={index}
            onClick={() => moveTo('BuildSelectionScreen', item.id, item.name, saveFiles)}
            onDelete={() => removeSave(item.id)}
          />
        ))}
      </CardScroll>
      <NewSaveButton label="ADD A NEW SAVE" plusIcon onClick={addSave} />
    </View>
  );
}
