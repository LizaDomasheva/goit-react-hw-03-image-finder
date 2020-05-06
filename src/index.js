import React from 'react';
import ReactDOM from 'react-dom';
import './styleheet/index.css';
import styles from './components/App.module.css';
import App from './components/App';

ReactDOM.render(
    <App className={styles.app}/>, 
  document.getElementById('root')
);


