export function Header() {
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
            <div>
              Current Score: <span>0</span>
            </div>

            <div>
              Best Score: <span>7</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
