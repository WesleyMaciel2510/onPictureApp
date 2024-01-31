import axios from 'axios';

export const sendDataToServer = async () => {
  console.log('chamou sendDataToServer');
  const dataToSend = {
    ID: 4,
    Name: 'José Augusto',
    AccessLevel: 5,
    IsActive: true,
  };
  try {
    const response = await axios.post(
      'http://localhost:3000/api/users',
      dataToSend,
    );
    console.log('Server response:', response.data);
  } catch (error: any) {
    //console.error('Error sending data to server:', error);
    console.error('Error sending data to server:', error.message);
    console.error('Error sending data to server:', error.config);
  }
};
