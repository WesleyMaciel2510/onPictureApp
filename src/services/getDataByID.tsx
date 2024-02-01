import axios from 'axios';

export const getDataByID = async () => {
  console.log('chamou getDataByID');
  try {
    const index = 5;
    const response = await axios.get(
      `http://192.168.100.2:3000/api/users/${index}`,
    );
    console.log('Server response:', response.data);
  } catch (error: any) {
    console.error('Error sending data to server:', error);
  }
};
