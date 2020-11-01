import styled from 'styled-components/macro'
import SmallHeadline from './SmallHeadline'
export default Highscore

function Highscore({color, score}) {

  return <Wrapper>
      <SmallHeadline>Current Score:</SmallHeadline>
      <NumberDiv style={{color: color}}>{score}</NumberDiv>

  </Wrapper>
}

const Wrapper = styled.div`

  font-family: sans-serif;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;
`

const NumberDiv = styled.div`

  padding: .5em 1em;
  font-size: 3em;
`