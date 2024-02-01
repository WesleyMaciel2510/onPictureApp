import axios from 'axios';

export const sendDataToServer = async () => {
  console.log('chamou sendDataToServer');
  const dataToSend = {
    ID: 11,
    Name: 'José Augusto',
    AccessLevel: 1,
    IsActive: false,
  };
  try {
    const response = await axios.post(
      'http://192.168.100.2:3000/api/users',
      dataToSend,
    );
    console.log('Server response:', response.data);
  } catch (error: any) {
    console.error('Error sending data to server:', error);
  }
};
