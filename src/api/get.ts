import axios from 'axios';

export const getBooks = async () => {
  const response = await axios.get('http://localhost:3000/books');
  return response.data;
};

export const getBookById = async (id: number) => {
  const response = await axios.get(`http://localhost:3000/books/${id}`);
  return response.data;
};
