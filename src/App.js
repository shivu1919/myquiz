import React, { useState } from 'react'
import './App.css'

function App() {

  const ques=[
    {
      questiontext: "What is the capital of India?" ,
      options:[
          "New Delhi",
          "Hyderabad",
          "Banglore",
          "Chennai"
      ]
    },
    {
      questiontext: "Who is the PM of India?" ,
      options:[
        "Revanth Reddy",
        "Narendra Modi",
        "Amit Shah",
        "Rahul Gandhi"
      ]
    },
    {
      questiontext: "Who is president of India?",
      options:[
        "Sonia Gandhi",
        "Narendra Modi",
        "Pawan kalyan",
        "Draupadi Murmu"
      ]
    },
    {
      questiontext: "What is the capital of Andhra Pradesh ?" ,
      options:[
        "Warangal",
        "Hyderabad",
        "Amrawati",
        "None of the Above"
      ]
    }
  ]

  const [count,setCount]= useState(0)

  function Change(){
    setCount(count+1)
  }


  return (
    <div className="container">
      <h1>My Quiz Application</h1>
        <div className="card">
            <h2>Question No: {count+1} / 4</h2>
            <h3>{ques[count].questiontext}</h3>

            <div id="option">
              {ques[count].options.map(x => <li>{x}</li>)}
            </div>
           
              <br>
              </br>
            <button onClick={Change}>Change</button>
        </div>
    </div>
  )
}

export default App