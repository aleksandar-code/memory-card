import { Card } from "./Card";

export function Cards({
  cards,
  setCards,
  setBestScore,
  setCurrentScore,
  currentScore,
}) {
  const shuffle = (...array: object[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <>
      <div className="cards">
        {cards.map((card: { id: number; name: string; clicked: boolean }) => {
          return (
            <Card
              key={card.id}
              cards={cards}
              card={card}
              setCards={setCards}
              shuffle={shuffle}
              setBestScore={setBestScore}
              currentScore={currentScore}
              setCurrentScore={setCurrentScore}
            ></Card>
          );
        })}
      </div>
    </>
  );
}
