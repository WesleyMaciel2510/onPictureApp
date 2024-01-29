import {useEffect, useRef, useState} from 'react';
import {useBetween} from 'use-between';
import {Camera, useCameraPermission} from 'react-native-vision-camera';
import {requestSavePermission} from '../../../helpers/savePicture';

export const useStateVariables = () => {
  const [cameraPermission, setCameraPermission] = useState(false);
  const [savePermission, setSavePermission] = useState(false);

  return {
    cameraPermission,
    setCameraPermission,
    savePermission,
    setSavePermission,
  };
};
export const useSharedState = () => useBetween(useStateVariables);

export const useInit = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const {setCameraPermission, savePermission, setSavePermission} =
    useSharedState();

  useEffect(() => {
    console.log('chamou useInit');
    const requestPermissions = async () => {
      if (!hasPermission) {
        try {
          const status = await requestPermission();
          console.log('status = ', status);
          status ? setCameraPermission(true) : setCameraPermission(false);

          //now ask savePermission
          if (!savePermission) {
            const permissionToSave = await requestSavePermission();
            console.log('permissionToSave status = ', permissionToSave);
            permissionToSave
              ? setSavePermission(true)
              : setSavePermission(false);
          }
        } catch (err) {
          console.error('error = ', err);
        }
      } else {
        console.log('Ja tem permissao!');
        setCameraPermission(true);
      }
    };
    requestPermissions();
  }, []);
};

/* export const useOntakePicture = () => {
  const camera = useRef<Camera>(null);
  const handleTakePicture = async () => {
    console.log('chamou handleTakePicture');
    console.log('camera.current = ', camera.current);

    if (camera.current) {
      try {
        console.log('entrou no try');

        const photo = await camera.current.takePhoto();
        const result = await fetch(`file://${photo.path}`);
        const data = await result.blob();
        console.log('data = ', data);

        // Optionally save to Camera Roll
        await CameraRoll.save(`file://${photo.path}`, {type: 'photo'});
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    }
  };
  return handleTakePicture;
}; */
