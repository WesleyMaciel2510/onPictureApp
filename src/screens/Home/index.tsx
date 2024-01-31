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
            console.log('clicou');
            sendDataToServer();
          }}>
          <Text style={styles.buttonText}>SEND DATA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonGetData]}
          onPress={() => {
            console.log('clicou');
            getDataFromServer();
          }}>
          <Text style={styles.buttonText}>GET DATA</Text>
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
    bottom: 90,
    left: '36%',
  },
  buttonSendData: {
    position: 'absolute',
    bottom: 30,
    left: '35%',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});
