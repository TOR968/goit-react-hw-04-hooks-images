import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import s from '../../utils/styles.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ gallery }) {
  return (
    <>
      <ul className={s.ImageGallery}>
        {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            url={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageGallery;
