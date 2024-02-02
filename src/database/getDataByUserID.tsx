import {ref, child, get} from 'firebase/database';
import {database} from './firebase';

export const getDataByUserID = async () => {
  //important: index 0 = userID 1 and so on because indexes starts in 0 as array
  const index = 0;
  const dataPath = `/onPictureApp/Users/${index}`;
  try {
    const snapshot = await get(child(ref(database), dataPath));
    console.log('Data from Firebase:', snapshot.val());
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
