export function Card({
  cards,
  card,
  setCards,
  shuffle,
  setBestScore,
  setCurrentScore,
  currentScore,
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
            console.log(card.clicked);
            setBestScore(currentScore);
            setCurrentScore(0);
          }
        }}
      >
        {card.name}
      </div>
    </>
  );
}
