import styled from 'styled-components/macro'
import SmallHeadline from './SmallHeadline'
export default Highscore

function Highscore({children}) {

  return <Wrapper>
      <SmallHeadline>Current Score:</SmallHeadline>
      <div>{children}</div>

  </Wrapper>
}

const Wrapper = styled.div`

  font-family: sans-serif;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;

  div {

  border: 1px solid black;
  display: grid;
  padding: .5em 1em;
  color: hotpink;
  font-size: 3em;

  }
`