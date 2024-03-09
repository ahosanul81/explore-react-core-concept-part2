import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import AllUsers from './AllUsers'
import Friends from './Friends'

function App() {
 function handleClick() {
    alert('clicked')
 }
 const handleClick2 = () => {
    alert('clicked button 2')
 }

 const addToFIve = (num) =>{
  alert(num + 5)
 }

  return (
    <>
     
      <h2>React Core Concept part 2</h2>
      <Friends></Friends>
      <Friends></Friends>
      <AllUsers></AllUsers>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => {alert('click button 3')}}>CLick me 3</button>
      <button onClick={() => {addToFIve(3)}}>Click 4</button>

      
    </>
  )
}

export default App
