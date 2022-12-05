import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // Format a guess into an array of letter objects
  const formatGuess = () => {};

  // Add a new guess to the guesses state
  // Update the isCorrect state if the guess is correct
  // Add one to the turn state
  const addNewGuess = () => {};

  // Handle keyup event & track current guess
  // If user presses enter, add the new guess
  const handleKeyup = ({ key }) => {
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
