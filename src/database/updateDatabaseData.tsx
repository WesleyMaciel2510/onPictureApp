import {ref, child, set} from 'firebase/database';
import {database} from './firebase';

export const updateDatabase = async (/* newData: unknown */) => {
  //important: index 0 = userID 1 and so on because indexes starts in 0 as array
  const index = 0;
  const dataPath = `/onPictureApp/Users/${index}`;
  const newData = {
    ID: index + 1,
    Name: 'Carlos Silva',
    AccessLevel: 5,
    IsActive: true,
  };

  try {
    await set(child(ref(database), dataPath), newData);
    console.log('Data updated successfully!');
  } catch (error) {
    console.error('Error updating data:', error);
  }
};
