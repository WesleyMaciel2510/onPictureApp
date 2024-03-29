import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useInit, useSharedState /* useOntakePicture */} from './logic';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
//import {CameraRoll} from 'react-native';

export default function CameraScreen({}) {
  const {cameraPermission} = useSharedState();
  const device = useCameraDevice('back');
  //const handleTakePicture = useOntakePicture();
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
        console.log('Photo taken = ', data);

        // Optionally save to Camera Roll
        //await CameraRoll.save(`file://${photo.path}`, {type: 'photo'});
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    }
  };
  useInit();
  if (device == null) return <NoCameraDeviceError />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {cameraPermission ? (
          <View style={{flex: 1}}>
            <Camera
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={true}
              ref={camera}
              photo={true}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleTakePicture();
              }}>
              <Text style={styles.buttonText}>TAKE PICTURE</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={{color: 'red', fontWeight: 'bold'}}>
              Camera Screen Não tem permissão
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 30,
    left: '33%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});
