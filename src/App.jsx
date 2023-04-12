import { useState } from 'react'
import './App.scss'

function App() { 

    const assignments = [
        {
            id: 1,
            title: "Complete a print function",
            partitions: [
                {
                    id: 1,
                    title: "1. Define the function and give it a name",
                    correctpattern: [1, 3, 5]
                },
                {
                    id: 2,
                    title: "2. Use correct method to print out your statement",
                    correctpattern: [2, 6]
                }
            ]
        }
    ]
    const [blockList, setBlockList] = useState([
        {id: 2, name: "println", info: "prints to the terminal"},
        {id: 3, name: "void", info: "the function will not return a value when called"},
        {id: 1, name: "public", info: "public thing"},
        {id: 4,name: "function", info: "define a function"},
        {id: 5, name: "main", info: "name of the function"},
        {id: 6, name: "Any String", info: "any string"}
    ])
    const [currentAssignment, setCurrentAssignment] = useState(0)
    const [step, setStep] = useState(0)
    const task = assignments[currentAssignment]
    const question = assignments[currentAssignment].partitions[step]

    function dragOverHandler(e, block) {
        e.preventDefault()
        if(e.target.className == 'block') {
          e.target.style.boxShadow = '0 2px 3px gray';
        }
      }
      function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none';
      }
      function dragStartHandler(e) {
      }
      function dragEndHandler(e) {
        e.target.style.boxShadow = 'none';
      }
      function dropHandler(e, block) {
        e.preventDefault();
        e.target.style.boxShadow = 'none';
      }
    return (
        <div className="App">
            <div className="questiontab">
              <h1>{task.title}</h1>
              <h2>{question.title}</h2>
              <div className="emptyspacetab">{question.correctpattern.map(emptyblock => <div className='emptyblock'></div>)} {"{} (  )"} </div>
              </div>
            <div className="blockstab">
              <h2>Avaliable blocks</h2>
              <div className='freeblocks'> {blockList.map(block => <div 
              className='block'
              draggable={true}
              onDragOver={(e) => dragOverHandler(e)}
              onDragStart={(e) => dragStartHandler(e, block)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, block)}
              >{block.name}</div>)} </div>
            </div>
        </div>
    )
}

export default App
