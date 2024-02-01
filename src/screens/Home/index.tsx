import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {sendDataToServer} from '../../services/sendDataToServer';
import {getDataFromServer} from '../../services/getDataFromServer';
import {updateServerData} from '../../services/updateServerData';
import {deleteServerData} from '../../services/deleteServerData';
//import {useInit, useSharedState} from './logic';
//import {useNavigation} from '@react-navigation/native';

export default function Home() {
  //const {loading, setLoading} = useSharedState();
  //const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  //useInit();
  // ============================================================================
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={[styles.container]}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Home Screen</Text>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.buttonSendData]}
          onPress={() => {
            sendDataToServer();
          }}>
          <Text style={styles.buttonText}>ADD DATA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonGetData]}
          onPress={() => {
            getDataFromServer();
          }}>
          <Text style={styles.buttonText}>GET DATA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonUpdateData]}
          onPress={() => {
            updateServerData();
          }}>
          <Text style={styles.buttonText}>UPDATE DATA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonDeleteData]}
          onPress={() => {
            deleteServerData();
          }}>
          <Text style={styles.buttonText}>DELETE DATA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonGetData: {
    position: 'absolute',
    bottom: 200,
    left: '38%',
  },
  buttonSendData: {
    position: 'absolute',
    bottom: 150,
    left: '37%',
  },
  buttonUpdateData: {
    position: 'absolute',
    bottom: 100,
    left: '35%',
  },
  buttonDeleteData: {
    position: 'absolute',
    bottom: 50,
    left: '35%',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});
