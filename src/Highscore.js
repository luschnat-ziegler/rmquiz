import styled from 'styled-components/macro'
export default Highscore

function Highscore({children}) {

  return <Wrapper>
      <p>Current Score</p>
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
  padding: 2em 3em;

  }
`