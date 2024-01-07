import { useState } from 'react';
import './App.css';

const questions = [ 
  {
    id: "01",
    title: "Where are these chairs assembled?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },

  {
    id: "02",
    title: "How long do i have to return my chair?",
    answer: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },

  {
    id: "03",
    title: "Do you ship to countries outside the EU?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
  }
]

function App() {

  return (
    <div className="container">
        {questions.map((quest) => {
          return <Question question = {quest} />
        })}
    </div>
  );
}

const Question = ({question}) =>{

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`quest-container ${ isOpen && 'quest-open' }`} >
      <div class="flex">
          <div className={ `${isOpen && 'green'} flex`}>
            <h2 className = "quest-num" > { question.id }</h2>
            <h2 className="quest-title"> { question.title } </h2> 
          </div>
          

        <button className= { "quest-bttm" } onClick={ () => setIsOpen(!isOpen) }> { isOpen ? "-" : "+" } </button>
      </div>
      
      {isOpen && <p className="quest-p"> { question.answer } </p>}
      
    </div>
  );
}

export default App;
