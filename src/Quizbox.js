import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import arr from './data/rmlist'
export default Quizbox

function Quizbox({onUserAnswer}) {

  const [displayedElements, setDisplayedElements] = useState([
    {
      img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: "Rick",
      id: 1
    },{
      img: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      name: "Morty",
      id: 2
    },1])
  
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
      <button onClick={clickHandlerYes}>YES</button>
      <button onClick={clickHandlerNo}>NO</button>
</Wrapper>
}

// Stylings

const Wrapper = styled.div`
  font-family: sans-serif;
  font-weight: 600;
  margin-bottom: 12px;

  border: 1px solid black;
  display: grid;
  padding: 2em 3em;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4fr 1fr;
  grid-gap: 5px;
`

const ImageStyled = styled.img`
  width: 130px;
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