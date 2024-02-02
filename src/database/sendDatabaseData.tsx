import {ref, set} from 'firebase/database';

import {database} from './firebase';

export const sendDataToDatabase = async () => {
  //important: index 0 = userID 1 and so on because indexes starts in 0 as array
  const index = 10;
  const dataPath = `/appServer/Users/${index}`;
  const data = {
    ID: 11,
    Name: 'Adicionado Augusto',
    AccessLevel: 2,
    IsActive: false,
  };
  try {
    const dataRef = ref(database, dataPath);
    await set(dataRef, data);
    console.log('Data posted successfully!');
  } catch (error) {
    console.error('Error posting data:', error);
  }
};
