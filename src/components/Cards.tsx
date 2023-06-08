export function Cards({ cards, setCards }) {
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
        {cards.map((card: { id: number; name: string }) => {
          return (
            <div
              key={card.id}
              className="card"
              onClick={() => setCards(shuffle(...cards))}
            >
              {card.name}
            </div>
          );
        })}
      </div>
    </>
  );
}
