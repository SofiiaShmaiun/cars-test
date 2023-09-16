import React from 'react';
import styles from './Button.module.css';

export const Button = ({ children, onClick, additionalStyles }) => {
  return (
    <button
      className={`${styles.button} ${additionalStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
