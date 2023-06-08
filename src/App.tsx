import { useState } from "react";
import { Game } from "./components/Game";
import { Header } from "./components/Header";

export default function App(): JSX.Element {
  const [currentScore, setCurrentScore] = useState<number | null>(0);
  const [bestScore, setBestScore] = useState<number | null>(0);

  return (
    <>
      <Header
        bestScore={bestScore}
        currentScore={currentScore}
      ></Header>
      <Game
        setBestScore={setBestScore}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
      ></Game>
    </>
  );
}
