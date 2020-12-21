import { useState, useEffect, useCallback } from 'react';
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

  // useEffect(fetchRequest, []);
  // useCallback(() => {
  //   const fetchRequest = async () => {
  //     try {
  //       const response = await get(query, page);
  //       return response.data.hits;
  //     } catch (error) {
  //       setError(true);
  //     }
  //   };
  //   fetchRequest();
  // }, []);
  // const fetchRequest = useCallback(() => {
  //   async () => {
  //     try {
  //       const response = await get(query, page);
  //       return response.data.hits;
  //     } catch (error) {
  //       setError(true);
  //     }
  //   };
  // }, [page, query]);
  //  fetchRequest();

  //   const fetchRequest = useCallback(() => {
  //     async () => {
  //       try {
  //         const response = await get(query, page);
  //         return response.data.hits;
  //       } catch (error) {
  //         setError(true);
  //       }
  //     }, [] );
  // useEffect(() => {
  //   fetchRequests()
  // }, [fetchRequest])

  useEffect(() => {
    setIsLoading(true);

    const request = async () => {
      const result = await fetchRequest();
      setGallery([...result]);
      setIsLoading(false);
    };
    request();
  }, [query]);

  useEffect(() => {
    setIsLoading(true);

    const request = async () => {
      const result = await fetchRequest();
      setGallery([...gallery, ...result]);
      setIsLoading(false);

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };
    request();
  }, [gallery, page]);

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
