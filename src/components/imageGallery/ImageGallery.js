import React, { Component } from 'react';
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from '../imageGalleryItem/ImageGalleryItem';
import { Modal } from '../modal/Modal';
import PropTypes from 'prop-types'


export class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    bigUrl: '',
    currentImage: '',
  };

  openModal = e => {
    const url = e.target.dataset.bigurl;
    this.setState(prev => ({
      isModalOpen: !prev.isModalOpen,
      currentImage: url,
    }));
  };
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen, currentImage } = this.state;
    return (
      <>
        <ul className={styles.ImageGallery}>
          {this.props.images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              openModal={this.openModal}
            />
          ))}
        </ul>
        {isModalOpen && (
          <Modal closeModal={this.closeModal} image={currentImage} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
}