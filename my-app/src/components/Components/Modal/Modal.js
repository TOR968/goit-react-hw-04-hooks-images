import React, { useEffect } from 'react';
import styles from '../../utils/styles.module.css';
import PropTypes from 'prop-types';

function Modal({ closeModal, children }) {
  const modalCloseFunc = e => {
    if (e.target.nodeName === 'IMG') {
      return;
    }
    closeModal();
  };

  const escCloseModal = e => {
    if (e.key !== 'Escape') {
      return;
    }
    closeModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', escCloseModal);
    return () => {
      window.removeEventListener('keydown', escCloseModal);
    };
  });

  return (
    <div className={styles.Overlay} onClick={modalCloseFunc}>
      <div className={styles.Modal}>
        <>{children}</>
      </div>
    </div>
  );
}
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
