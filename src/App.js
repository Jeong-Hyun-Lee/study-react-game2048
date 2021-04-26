import AboveGame from './components/AboveGame';
import Game from './components/Game';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import useLocalStorage from './hook/useLocalStorage';

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useLocalStorage('bestScore', 0)
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score)
    }
  })
  return (
    <div className="container">
      <Header score={score} bestScore={bestScore}></Header>
      <AboveGame></AboveGame>
      <Game setScore={setScore}></Game>
    </div>
  );
}

export default App;
