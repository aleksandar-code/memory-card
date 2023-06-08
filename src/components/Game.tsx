import { useState } from "react";
import { Cards } from "./Cards";

export function Game() {
  const [cards, setCards] = useState<object | null>([
    { id: 0, name: "a" },
    { id: 1, name: "b" },
    { id: 2, name: "c" },
    { id: 3, name: "d" },
    { id: 4, name: "e" },
    { id: 5, name: "f" },
    { id: 6, name: "g" },
    { id: 7, name: "h" },
    { id: 8, name: "i" },
    { id: 9, name: "j" },
    { id: 10, name: "k" },
    { id: 11, name: "l" },
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
