import React, {useState} from 'react';
import {View} from 'react-native';
import style from './SaveSelectionPage.sass';
import Title from '../../components/Title';
import CardScroll from '../../components/CardScroll';
import NewSaveButton from '../../components/NewSaveButton';
import SaveFileButton from '../../components/SaveFileButton';

export default function SaveSelectionPage({navigation}) {
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

  const moveTo = (path,id,name) => {
    navigation.navigate(path, {
      id: id,
      name: name,
    });
  };

  return (
    <View style={style.container}>
      <Title name={'ACCOUNT NAME ACCOUNT NAME'}></Title>
      <CardScroll style={style.card}>
        {saveFiles.map((item, index) => (
          <SaveFileButton
            label={item.name}
            key={index}
            onClick={() => moveTo('BuildSelectionScreen', item.id, item.name)}
            onDelete={() => removeSave(item.id)}
          />
        ))}
      </CardScroll>
      <NewSaveButton label="ADD A NEW SAVE" plusIcon onClick={addSave} />
    </View>
  );
}
