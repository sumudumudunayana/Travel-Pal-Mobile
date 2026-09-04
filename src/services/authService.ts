import api from "./api";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const registerUser = async (userData: any) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};

export const changePassword = async (
  currentPassword: string,
  newPassword: string,
) => {
  const token = await AsyncStorage.getItem('token');
  const response = await api.put(
    '/auth/change-password',
    {currentPassword, oldPassword: currentPassword, newPassword},
    {headers: {Authorization: `Bearer ${token}`}},
  );

  return response.data;
};
