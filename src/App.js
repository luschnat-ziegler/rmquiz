import Quizbox from './Quizbox'
import Highscore from './Highscore'
import { useState } from 'react';
import GlobalStyles from "./GlobalStyles";
import styled from 'styled-components/macro'
import SmallHeadline from './SmallHeadline'

function App() {

  const [highscore, setHighscore] = useState(0)

  function handleUserAnswer(isCorrect) {
    isCorrect && setHighscore(highscore+10)
  }

  return (
    <StyledDiv className="App">
      <GlobalStyles />
      <Headline>Rick & Morty Quiz</Headline>
      <SmallHeadline>Do they share an episode?</SmallHeadline>
      <Quizbox onUserAnswer={handleUserAnswer}/>
      <Highscore>{highscore}</Highscore>     
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
