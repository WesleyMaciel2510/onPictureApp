import {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
//import {useCameraPermission} from 'react-native-vision-camera';
//import {CameraPermissionStatus} from 'react-native-vision-camera';

export const useStateVariables = () => {
  const [cameraPermission, setCameraPermission] = useState(false);
  return {
    cameraPermission,
    setCameraPermission,
  };
};
export const useSharedState = () => useBetween(useStateVariables);

export const useInit = () => {
  //const {hasPermission, requestPermission} = useCameraPermission();
  const {setCameraPermission} = useSharedState();

  useEffect(() => {
    console.log('chamou useInit');
    /* const requestPermissions = async () => {
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
    }; */
    //requestPermissions();
  }, []);
};
