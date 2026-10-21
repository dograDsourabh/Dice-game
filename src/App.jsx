import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame onStart={() => setIsGameStarted(true)} />
      )}
    </>
  );
}

export default App;
