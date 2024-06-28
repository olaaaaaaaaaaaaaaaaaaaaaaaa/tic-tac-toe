import React from "react";
import { useState } from "react";
import Field from "../Field/field";
import Information from "../Information/information";

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const [field, setField] = useState(Array(9).fill(""));

  const checkWinner = (newField) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combinations of winningCombinations) {
      const [a, b, c] = combinations;
      if (
        newField[a] &&
        newField[a] === newField[b] &&
        newField[b] === newField[c]
      ) {
        return true;
      }
    }

    return false;
  };

  const handleCellClick = (index) => {
    if (field[index] || isGameEnded) return;

    const newField = field.slice();
    newField[index] = currentPlayer;
    setField(newField);

    if (checkWinner(newField)) {
      setIsGameEnded(true);
      return;
    }

    if (newField.every((cell) => cell)) {
      setIsDraw(true);
      setIsGameEnded(true);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
  };
  const resetGame = () => {
    setCurrentPlayer("X");
    setField(Array(9).fill(""));
  };

  return (
    <div className="App">
      <Field field={field} handleCellClick={handleCellClick} />
      <Information
        isDraw={isDraw}
        isGameEnded={isGameEnded}
        currentPlayer={currentPlayer}
      />
      <button onClick={resetGame}>Начать заново</button>
    </div>
  );
};

export default Game;
