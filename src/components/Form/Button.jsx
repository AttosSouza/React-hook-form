import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, type, ...props }) => {
  const className =
    type === 'primary' ? styles.buttonPrimary : styles.buttonSecondary;
  return (
    <button {...props} className={`${styles.customButton} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
