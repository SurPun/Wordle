import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

// Component
import Grid from "./Grid";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  console.log("The Word Is :", solution);

  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  );
}
