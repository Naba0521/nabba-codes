// LoadingSpinner.js
import styles from "./LoadingIcon.module.css";
import React from "react";
import { FaSpinner } from "react-icons/fa"; // You can use any icon library or custom CSS for the spinner

const LoadingSpinner = () => {
  return (
    <div className={`${styles.spinner}`}>
      <FaSpinner className={`${styles.iconspin}`} />
    </div>
  );
};

export default LoadingSpinner;
