import axios from 'axios';

export const getBooks = async () => {
  const response = await axios.get('http://localhost:3000/books');
  return response.data;
};
