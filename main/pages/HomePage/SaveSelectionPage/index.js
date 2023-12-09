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
import ModalConfirm from '../../../components/ModalConfirm';
import ModalTextInput from '../../../components/ModalTextInput';

export default function SaveSelectionPage() {

  const [modalVisible, setModalVisible] = useState(false)
  const [modalInputVisible, setModalInputVisible] = useState(false)
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const auth = getAuth();
  const user = auth.currentUser;

  const [saves, setSaves] = useState([]);
  const [saveFiles, setSaveFiles] = useState([]);
  const [lastID, setLastID] = useState(0);

  const [saveToDeleteName, setSaveToDeleteName] = useState('')
  const [saveToDeleteID, setSaveToDeleteID] = useState('')

  const [saveToAddName, setSaveToAddName] = useState('')
  const [saveToAddErrorVisible, setSaveToAddErrorVisible] = useState(false)
  const [saveToAddErrorMessage, setSaveToAddErrorMessage] = useState('')

  const getData = async () => {
    setSaves(await getSaves())
    setModalInputVisible(false)
    setSaveToAddName('')
  }

  const addSave = () => {
    if (saveToAddName === '') {
      setSaveToAddErrorVisible(true)
      setSaveToAddErrorMessage('Save name cannot be empty')
    } else if (saveToAddName.length > 20) {
      setSaveToAddErrorVisible(true)
      setSaveToAddErrorMessage('Save name cannot be longer than 20 characters')
    }
    else {
      createNewSave(
        lastID,
        user?.email,
        saveToAddName ? saveToAddName : 'SAVE FILE',
      )
      getData();
    }
  };

  const onAddSaveModal = () => {
    setModalInputVisible(true)
  }

  const onAddSaveModalDecline = () => {
    setModalInputVisible(false)
    setSaveToAddName('')
    setSaveToAddErrorMessage('')
    setSaveToAddErrorVisible(false)
  }

  const deleteSave = async (save_id) => {
    try {
      await removeSave(save_id);
    }
    catch (error) {
      console.log(error)
    }
    finally {
      getData();
      setModalVisible(false)
      setSaveToDeleteName('')
      setSaveToDeleteID('')
    }
  }

  const onDeleteModal = (save_name, save_id) => {
    setModalVisible(true)
    setSaveToDeleteName(save_name)
    setSaveToDeleteID(save_id)
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
    setSaveToAddErrorMessage('')
    setSaveToAddErrorVisible(false)
  }, [saveToAddName]);

  useEffect(() => {
    setSaveFiles([]);
    saves?.map((item, index) => {
      if (user?.email === item?.user_email) {
        setSaveFiles(saveFiles => [...saveFiles, item])
      }
      if (index + 1 === saves.length) {
        setLastID(saves[index].save_id + 1)
      }
    })
  }, [saves]);

  return (
    <>
      <View style={style.container}>
        <Title name={'Characters'}></Title>
        <CardScroll style={style.card}>
          {saveFiles.map((item, index) => (
            <SaveFileButton
              label={item.save_name}
              key={index}
              onClick={() => moveTo('BuildSelectionScreen', item?.save_id)}
              onDelete={() => onDeleteModal(item?.save_name, item?.save_id)}
            />
          ))}
        </CardScroll>
        <NewSaveButton label="ADD A NEW SAVE" plusIcon onClick={onAddSaveModal} />
      </View>
      <ModalConfirm
        visible={modalVisible}
        setVisible={setModalVisible}
        text={'Are you sure you want to delete "' + saveToDeleteName + '" save file?'}
        onDecline={() => setModalVisible(false)}
        onConfirm={() => deleteSave(saveToDeleteID)}
        confirmLabel={'Confirm'}
        declineLabel={'Cancel'}
        confirmColor={'green'}
        declineColor={'red'}
      />
      <ModalTextInput
        visible={modalInputVisible}
        setVisible={onAddSaveModalDecline}
        text={'Do you want to create new save file?'}
        inputPlaceholder={'Input save name'}
        inputValue={saveToAddName}
        setInputValue={setSaveToAddName}
        onConfirm={addSave}
        onDecline={onAddSaveModalDecline}
        confirmLabel={'Confirm'}
        declineLabel={'Cancel'}
        confirmColor={'green'}
        declineColor={'red'}
        errorVisible={saveToAddErrorVisible}
        errorMessage={saveToAddErrorMessage}
      />
    </>
  );
}
