import { useState } from "react";
import { Cards } from "./Cards";

export function Game() {
  const [cards, setCards] = useState<number[] | null>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);

  return (
    <>
      <Cards
        cards={cards}
        setCards={setCards}
      ></Cards>
    </>
  );
}
