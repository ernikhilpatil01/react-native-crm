import AsyncStorage from "@react-native-async-storage/async-storage";

export const set = async (key, value) => {
  console.log("SAVING TO ASYNC STORAGE ::: ", key, value);
  const serialized = JSON.stringify(value);
  return await AsyncStorage.setItem(key, serialized);
};

export const get = async (key) => {
  console.log("LOADING FROM ASYNC STORAGE ::: ", key);
  const raw = await AsyncStorage.getItem(key);
  return JSON.parse(raw);
};

export const remove = async (key) => {
  return await AsyncStorage.removeItem(key);
};

export const clear = async () => {
  console.log("CLEARING ASYNC STORAGE");
  return await AsyncStorage.clear();
};
