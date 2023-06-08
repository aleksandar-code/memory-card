export function Cards({ cards, setCards }) {
  return (
    <>
      <div className="cards">
        {cards.map((card: number) => {
          return (
            <div
              key={card}
              className="card"
            >
              {card}
            </div>
          );
        })}
      </div>
    </>
  );
}
