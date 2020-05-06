import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

export const LoaderText = () => (
  <div className={styles.container}>
    <h1>Loading...</h1>
    <Loader
      type="Oval"
      color="black"
      height={150}
      width={150}
      // timeout={3000}
    />
  </div>
);
