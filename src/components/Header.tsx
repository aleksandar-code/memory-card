export function Header({ bestScore, currentScore }) {
  return (
    <>
      <header>
        <h1>Memory Game</h1>
        <div>
          <p>
            Get points by clicking on an image but don't click anymore than
            once!
          </p>
          <div>
            <div>Current Score: {currentScore}</div>

            <div>Best Score: {bestScore}</div>
          </div>
        </div>
      </header>
    </>
  );
}
