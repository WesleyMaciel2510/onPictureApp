import axios from 'axios';

export const getDataFromServer = async () => {
  console.log('chamou getDataFromServer');
  try {
    const response = await axios.get('http://192.168.100.2:3000/api/users');
    console.log('Server response:', response.data);
  } catch (error: any) {
    console.error('Error sending data to server:', error);
  }
};
