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
import Loader from '../../../components/Loader';
import Card from '../../../components/Card';

export default function SaveSelectionPage() {

  const [isLoading, setIsLoading] = useState(false)
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
    setModalInputVisible(false)
    setIsLoading(true)
    try {
      setSaves(await getSaves())
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setSaveToAddName('')
      setIsLoading(false)
    }
  }

  const addSave = () => {
    if (saveToAddName === '') {
      setSaveToAddErrorVisible(true)
      setSaveToAddErrorMessage('Save name cannot be empty')
    } else if (saveToAddName.length > 16) {
      setSaveToAddErrorVisible(true)
      setSaveToAddErrorMessage('Save name cannot be longer than 16 characters')
    }
    else {
      setIsLoading(true)
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
    setModalVisible(false)
    setIsLoading(true)
    try {
      await removeSave(save_id);
    }
    catch (error) {
      console.log(error)
    }
    finally {
      getData();
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
        setLastID(createSaveID(saves))
      }
    })
  }, [saves]);

  const createSaveID = (data) => {
    let temp = data.length + 1
    data?.map((item, index) => {
      if (temp === item?.save_id) {
        temp = temp + 1
      }
    })
    return temp
  }


  return (
    <>
      <View style={style.container}>
        <Title name={'Characters'}></Title>
        {!isLoading ? (
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
        ) : (
          <Card style={style.card_loading}>
            <Loader />
          </Card>
        )}
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
        maxLength={16}
      />
    </>
  );
}
