export const localStorageSetter = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
export const localStorageGetter = (key: string) => {
  const rawData = localStorage.getItem(key);
  return rawData ? JSON.parse(rawData) : '';
};
