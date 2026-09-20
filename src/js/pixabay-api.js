import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

// Register at https://pixabay.com/api/docs/ and paste your own key here
const API_KEY = '57667249-14f1ef6221ae19d0d12b03187';

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}