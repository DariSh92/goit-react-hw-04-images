import axios from 'axios';

export const fetchImage = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '29988356-cebb73473df94062bbd0cb1a8';

  const response = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};
