import { useState } from "react";
import { Cards } from "./Cards";

export function Game({ currentScore, setCurrentScore, setBestScore }) {
  const [cards, setCards] = useState<object | null>(createCards());

  function createCards() {
    const array: object[] = [];
    for (let i = 0; i < 12; i += 1) {
      array.push({ id: i, name: `${i}`, clicked: false });
    }
    return array;
  }

  return (
    <>
      <Cards
        cards={cards}
        setCards={setCards}
        setBestScore={setBestScore}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
      ></Cards>
    </>
  );
}
