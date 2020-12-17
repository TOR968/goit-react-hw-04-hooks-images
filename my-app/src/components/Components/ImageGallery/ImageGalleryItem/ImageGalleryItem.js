import React, { useState } from 'react';
import styles from '../../../utils/styles.module.css';
import Modal from '../../Modal/Modal';
import PropTypes from 'prop-types';

function ImageGalleryItem({ url, alt, largeImageURL }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={url}
        alt={alt}
        className={styles['ImageGalleryItem-image']}
        onClick={openModal}
      />
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <img src={largeImageURL} alt={alt} />
        </Modal>
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
