import React, { Component, createRef} from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types'


export class Modal extends Component {
  overlayRef = createRef();
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.closeModal();
  };

  handleOverlayClick = e => {
const {current} = this.overlayRef;

if (current && e.target !==  current) return;
this.props.closeModal();
}

  render() {
    return (
      <div className={styles.Overlay} ref={this.overlayRef} onClick={this.handleOverlayClick}>
        <div className={styles.Modal}>
          <img src={this.props.image} alt='your request' />
        </div>
      </div>
    );
  }
}


Modal.propTypes = {
  closeModal: PropTypes.func,
  image: PropTypes.string,
}