import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';


const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button {...props} className={`${styles.button} ${props.className || ''}`} />
  );
};

export default Button;
