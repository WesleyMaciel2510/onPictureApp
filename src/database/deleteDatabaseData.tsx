import {ref, child, remove} from 'firebase/database';
import {database} from './firebase';

export const deleteDatabase = async () => {
  //important: index 0 = userID 1 and so on because indexes starts in 0 as array
  const index = 10;
  const dataPath = `/appServer/Users/${index}`;

  try {
    await remove(child(ref(database), dataPath));
    console.log('Data deleted successfully!');
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};
