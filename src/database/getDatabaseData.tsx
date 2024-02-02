import {ref, child, get} from 'firebase/database';
import {database} from './firebase';

export const getDatabaseData = async () => {
  const dataPath = '/onPictureApp/Users/';
  try {
    const snapshot = await get(child(ref(database), dataPath));
    console.log('Data from Firebase:', snapshot.val());
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
