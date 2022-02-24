import AsyncStorage from '@react-native-async-storage/async-storage';
export const setToken = async token => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.error(error);
  }
};
export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('token');
  } catch (error) {
    console.error(error);
  }
};
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.error(error);
  }
};
