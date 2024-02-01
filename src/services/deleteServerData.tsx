import axios from 'axios';

export const deleteServerData = async () => {
  console.log('chamou deleteServerData');
  const index = 5;
  try {
    const response = await axios.delete(
      `http://192.168.100.2:3000/api/users/${index}`,
    );
    console.log('Server response:', response.data);
  } catch (error: any) {
    console.error('Error sending data to server:', error);
  }
};
