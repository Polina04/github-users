import type { User } from 'types/models';

import axiosInstance from 'services/axiosInstance';

export const getUsers = async (lastUserId = 0): Promise<User[]> => {
  const { data } = await axiosInstance.get(
    `/users?per_page=20&since=${lastUserId}`
  );

  return data;
};

export const getUserByLogin = async (userLogin: string): Promise<User[]> => {
  const { data } = await axiosInstance.get(`/users/${userLogin}`);

  return data;
};
