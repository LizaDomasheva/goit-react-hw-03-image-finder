import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types'


export const ImageGalleryItem = ({ image, openModal }) => (
  <>
    <li className={styles.ImageGalleryItem}>
      <img
        data-bigurl={image.bigUrl}
        src={image.url}
        onClick={e => openModal(e)}
        alt={image.tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  </>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  openModal: PropTypes.func,
}
