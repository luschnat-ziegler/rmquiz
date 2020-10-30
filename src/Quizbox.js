import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
export default Quizbox

Quizbox.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool
}


function Quizbox({title}) {

    return <Wrapper>
        <img alt=""></img>
        <div>{title}</div>
        <img alt=""></img>
        <div></div>
        <button>YES</button>
        <button>NO</button>
  </Wrapper>
  }


const Wrapper = styled.div`
  font-family: sans-serif;
  font-weight: 600;
  margin-bottom: 12px;

  border: 1px solid black;
  display: grid;
  padding: 2em 3em;
`