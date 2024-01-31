import {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import {useCameraPermission} from 'react-native-vision-camera';
import {requestSavePermission} from '../../../helpers/savePicture';
import {PhotoIdentifier} from '@react-native-camera-roll/camera-roll';
import {storage} from '../../../helpers/storage';

export const useStateVariables = () => {
  const [cameraPermission, setCameraPermission] = useState(false);
  const [savePermission, setSavePermission] = useState(false);
  const [photo, setPhoto] = useState<PhotoIdentifier>();

  return {
    cameraPermission,
    setCameraPermission,
    savePermission,
    setSavePermission,
    photo,
    setPhoto,
  };
};
export const useSharedState = () => useBetween(useStateVariables);

export const useInit = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const {setCameraPermission, savePermission, setSavePermission} =
    useSharedState();

  useEffect(() => {
    console.log('chamou useInit');
    console.log('savePermission = ', savePermission);

    const requestPermissions = async () => {
      if (!hasPermission) {
        try {
          const status = await requestPermission();
          console.log('status = ', status);
          status ? setCameraPermission(true) : setCameraPermission(false);
        } catch (err) {
          console.error('error = ', err);
        }
      } else {
        console.log('Ja tem permissao!');
        setCameraPermission(true);
      }
      //now ask savePermission
      if (!savePermission) {
        const permissionToSave = await requestSavePermission();
        console.log('permissionToSave status = ', permissionToSave);
        permissionToSave ? setSavePermission(true) : setSavePermission(false);
      }
    };
    requestPermissions();
  }, []);
};

/* export const useOnSendPicture = () => {
  const {photo} = useSharedState();
  console.log('chamou useOnSendPicture !! ');
  if (photo) {
    const jsonSavedPicture = storage.getString('savedPicture');
    const pictureStored = JSON.parse(jsonSavedPicture);
    console.log('@ pictureSaved @ RETRIVED @ = ', pictureStored);
  }

  const handleSendPicture = () => {
    console.log('chamou handleSendPicture !! ');
    console.log('PHOTO = ', photo);
  };
  return {handleSendPicture};
};
 */
