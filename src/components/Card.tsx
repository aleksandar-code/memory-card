export function Card({
  cards,
  card,
  setCards,
  shuffle,
  setBestScore,
  setCurrentScore,
  currentScore,
  createCards,
}) {
  return (
    <>
      <div
        className="card"
        onClick={() => {
          if (!card.clicked) {
            setCards(shuffle(...cards), (card.clicked = true));
            setCurrentScore((currentScore += 1));
          } else {
            setBestScore(currentScore);
            setCurrentScore(0);
            setCards(createCards(...cards));
          }
        }}
      >
        {card.name}
      </div>
    </>
  );
}
