export function Header({ bestScore, currentScore }) {
  return (
    <>
      <header>
        <h1>Memory Game</h1>
        <div>
          <p className="instructions">
            Get points by clicking on an image but don't click anymore than
            once!
          </p>
          <div>
            <div className="current-score">Current Score: {currentScore}</div>

            <div className="best-score">Best Score: {bestScore}</div>
          </div>
        </div>
      </header>
    </>
  );
}
