import KEY from './key';
import axios from 'axios';

const get = (query, page = 1) => {
  const response = axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=10`,
  );
  return response;
};

export default get;
