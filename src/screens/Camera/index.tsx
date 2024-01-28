import React from 'react';
//import {useCameraPermission} from 'react-native-vision-camera';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useInit, useSharedState} from './logic';

export default function CameraScreen({}) {
  const {cameraPermission} = useSharedState();
  //useInit();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {cameraPermission ? (
          <View>
            <Text style={{color: 'red', fontWeight: 'bold'}}>
              Camera Screen tem permissão
            </Text>
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
});
