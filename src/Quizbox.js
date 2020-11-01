import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import arr from './data/rmlist'
export default Quizbox

function Quizbox({onUserAnswer}) {

  const [displayedElements, setDisplayedElements] = useState([
    {
      img: 'https://rickandmortyapi.com/api/character/avatar/249.jpeg',
      name: "---",
      id: 1
    },{
      img: 'https://rickandmortyapi.com/api/character/avatar/249.jpeg',
      name: "---",
      id: 2
    },2])
  
  useEffect(() => {
    getElements(arr).then(elements => setDisplayedElements(elements))
  }, [])

  function getNewPair (array) {
    getElements(array).then(elements => setDisplayedElements(elements))
  }

  function clickHandlerYes() {
    getNewPair(arr)
    if (displayedElements[2] === 1) {
      onUserAnswer(true)
    } else {
      onUserAnswer(false)
    }
  }

  function clickHandlerNo() {
    getNewPair(arr)
    if (displayedElements[2] === 0) {
      onUserAnswer(true)
    } else {
      onUserAnswer(false)
    }
  }

  return <Wrapper>
      <ImageStyled src={displayedElements[0].img} alt=""></ImageStyled>
      <ImageStyled src={displayedElements[1].img} alt=""></ImageStyled>
      <span>{displayedElements[0].name}</span>
      <span>{displayedElements[1].name}</span>
      <StyledButton onClick={clickHandlerYes}>YES</StyledButton>
      <StyledButton onClick={clickHandlerNo}>NO</StyledButton>
</Wrapper>
}

// Stylings

const Wrapper = styled.div`

  background-color: rgba(153, 50, 204, 0.6);;

  display: grid;
  padding: 1.5em 1.5em;
  border-radius: 1em;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 6fr 2fr;
  grid-gap: 5px;

  justify-items: center;
  text-align: center;
  color: peachpuff;
  margin-bottom: 20px;
`

const ImageStyled = styled.img`
  width: 130px;
  border-radius: .5em;
`

const StyledButton = styled.button`
  width: 130px;
  text-align: center;
  border: none;
  background-color: orange;
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 700;
  font-size: 1.2em;
  border-radius: .5em;
`

// Function to generate pair of elements for quizbox

function getElements(pairingsArray) {

  const randomArray = pairingsArray[Math.floor(Math.random() * pairingsArray.length)];

  return fetch(`https://rickandmortyapi.com/api/character/${randomArray[0]},${randomArray[1]}`)
    .then(response => response.json())
    .then(data => {
      const newEntry = [
        {img: data[0].image, name: data[0].name, id: data[0].id},
        {img: data[1].image, name: data[1].name, id: data[1].id},
        randomArray[2]
      ]
      return newEntry
    })
}