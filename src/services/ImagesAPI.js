import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?q=';
const API_KEY = '&key=16022511-43fa01566a8e8c2e5e497e2d2';
const API_PARAM = '&image_type=photo&orientation=horizontal&per_page=12';

export const fetchImages = (query, page) => axios.get(BASE_URL + query + `&page=${page}` + API_KEY + API_PARAM);




