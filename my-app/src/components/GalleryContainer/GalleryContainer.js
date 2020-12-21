import { useState, useEffect } from 'react';
import Searchbar from '../Components/Searchbar/Searchbar';
import get from '../utils/image-api';
import ImageGallery from '../Components/ImageGallery/ImageGallery';
import Button from '../Components/Button/Button';

import LoaderSection from '../Components/Loader/Loader';

function GalleryContainer() {
  const [gallery, setGallery] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const onChangeQuery = query => {
    setQuery(query);
    setPage(1);
    setGallery([]);
  };

  useEffect(() => {
    async function fetchRequest() {
      try {
        setIsLoading(true);
        const request = await get(query, page);
        setGallery(prevArray => [...prevArray, ...request]);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    if (query) fetchRequest();
  }, [page, query]);

  const pageChanger = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar onChangeQuery={onChangeQuery} />
      {error && <h1>something gone wrong, try again later</h1>}
      {!!gallery.length && !error && (
        <>
          <ImageGallery gallery={gallery} />
          {!isLoading && <Button pageChanger={pageChanger} />}
        </>
      )}
      {isLoading && <LoaderSection />}
    </>
  );
}
export default GalleryContainer;
