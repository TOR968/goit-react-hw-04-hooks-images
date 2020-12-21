import KEY from './key';
import axios from 'axios';

const get = async (query, page = 1) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=10`,
  );
  return data.hits;
};

export default get;
