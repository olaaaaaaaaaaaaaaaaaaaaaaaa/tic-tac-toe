import React from "react";
import styles from './information.module.css'

const Information = ({ isDraw, currentPlayer, isGameEnded }) => {
  return (
    <div className={styles.information}>
      {isDraw === false && isGameEnded === false
        ? `Ходит: ${currentPlayer}`
        : ""}
      {isDraw ? <p>Ничья</p> : ""}
      {isDraw === false && isGameEnded === true
        ? `Победа: ${currentPlayer}`
        : ""}
    </div>
  );
};

export default Information;
