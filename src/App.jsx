import { useState } from 'react'
import './App.scss'

function App() {

  const [questionList, setQuestionList] = useState([
    {id: 1,
    title: "Write a function to print text to the console (define a function)",
    blocks: [{id: 1, group: "purple", correct: "public"}, {id: 2, group: "brown", correct: "void"}] 
  },
  {id: 2,
  title: "Write a function to print text to the console (use built-in function to print out the text)",
  blocks: [{id: 3, group: "magenta", correct: "println"}]
  }
  ])
  const [currentQuestion, setCurrentQuestion] = useState()

  const [blockList, setBlockList] = useState([
    {id: 1, name: "println", info: "prints to the terminal"
    },
    {id: 2, name: "void", info: "the function will not return a value when called"
    },
    {id: 3, name: "public", info: "public thing"
    },
    {id: 4,name: "function", info: "define a function"
    }
  ])

  const [currentBlock, setCurrentBlock] = useState()

  function dragStartHandler(e, block) {
    console.log('drag', block);
    setCurrentBlock(block)
  }
  function dragEndHandler(e) {
    e.target.style.background = 'white'
  }
  function dragOverHandler(e) {
    e.preventDefault()
    e.target.style.background = 'lightgray'
  }
  function dropHandler(e, block) {
    console.log('drop', block);
    e.target.style.background = 'white'
    e.preventDefault()
  }


  return (
    <div className="App">
      <h1>Utopia v2.0</h1>
      <div className='tasktab'>

      </div>
      <div className="blockstab">
        {blockList.map(block => 
          <div className='block'
            draggable={true}
            onDragStart={(e) => dragStartHandler(e, block)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, block)}
          >
            {block.name}
          </div>)}
      </div>
    </div>
    )
}

export default App
