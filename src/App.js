import Quizbox from './Quizbox'
import Highscore from './Highscore'
import { useState } from 'react';

function App() {

  const [highscore, setHighscore] = useState(0)

  function handleUserAnswer(isCorrect) {
    isCorrect && setHighscore(highscore+10)
  }

  return (
    <div className="App">
      <h1>Rick & Morty Quiz</h1>
      <h3>Do they share an episode?</h3>
      <Quizbox onUserAnswer={handleUserAnswer}/>
      <Highscore>{highscore}</Highscore>     
    </div>
  );
}

export default App;
