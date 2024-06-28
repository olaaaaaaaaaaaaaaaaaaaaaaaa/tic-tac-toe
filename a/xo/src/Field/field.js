import React from "react";
import styles from './field.module.css'

const Field = ({ field, handleCellClick }) => {
  return (
    <div className={styles.field}>
      {field.map((item, index) => (
        <div key={index}>
          <button onClick={() => handleCellClick(index)}>{item}</button>
        </div>
      ))}
    </div>
  );
};

export default Field;
