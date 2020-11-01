import Quizbox from './Quizbox'
import Highscore from './Highscore'
import { useState } from 'react';
import GlobalStyles from "./GlobalStyles";
import styled from 'styled-components/macro'
import SmallHeadline from './SmallHeadline'

function App() {

  const [highscore, setHighscore] = useState([0,"orange"])

  function handleUserAnswer(isCorrect) {
    isCorrect ? setHighscore([highscore[0]+ 10, "green"]) : setHighscore([highscore[0], "red"])
  }

  return (
    <StyledDiv className="App">
      <GlobalStyles />
      <Headline>Rick & Morty Quiz</Headline>
      <SmallHeadline>Do they share an episode?</SmallHeadline>
      <Quizbox onUserAnswer={handleUserAnswer}/>
      <Highscore color={highscore[1]} score={highscore[0]} />     
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 20px;
`

const Headline = styled.h1`
  font-size: 1.8em;
  color: orange;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`

export default App;
