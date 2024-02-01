import axios from 'axios';

export const updateServerData = async () => {
  console.log('chamou updateServerData');
  const index = 5;
  const data = {
    ID: index + 1,
    Name: 'Leão Batista',
    AccessLevel: 4,
    IsActive: true,
  };
  try {
    const response = await axios.put(
      `http://192.168.100.2:3000/api/users/${index}`,
      data,
    );
    console.log('Server response:', response.data);
  } catch (error: any) {
    console.error('Error sending data to server:', error);
  }
};
