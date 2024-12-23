import React, { useState } from 'react'
import './App.css'

function App() {

    const question=[
      "What is the capital of India?",
      "Who is the PM of India?",
      "Who is president of India?",
      "What is the capital of Andhra Pradesh ?"
    ]

    const options=[
      {
        optionvalue:[
          "New Delhi",
          "Hyderabad",
          "Banglore",
          "Chennai"
        ]
      },
      {
        optionvalue:[
        "Revanth Reddy",
        "Narendra Modi",
        "Amit Shah",
        "Rahul Gandhi"
        ]
      },
      {
        optionvalue:[
        "Sonia Gandhi",
        "Narendra Modi",
        "Pawan kalyan",
        "Draupadi Murmu"
        ]
      },
      {
        optionvalue:[
        "Warangal",
        "Hyderabad",
        "Amrawati",
        "None of the Above"
        ]
      }
    ]


    const[counter, setCounter] = useState(0)


    function CheckAnswer(index){
      console.log("This function is working");
      
      console.log(index)
    }

    function Change(){
      CheckAnswer()
      setCounter(counter+1)
      
    }


  return (
    <div className="container">
      <h1>My Quiz Application</h1>
        <div className="card">
            <h2>Question No: {counter+1} /4</h2>

            <h2>{question[counter]}</h2>
            
            <div id="option">
              {options[counter].optionvalue.map((x,index)=> <li key={index} onClick={()=>{Change(index)}} id={index}>{x}</li>)}

            </div>
            
            <br />
        </div>
    </div>
  )
}

export default App