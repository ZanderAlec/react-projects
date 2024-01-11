import { useState } from 'react';
import './App.css';

const questions = [ 
  {
    title: "Where are these chairs assembled?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },

  {
    title: "How long do i have to return my chair?",
    answer: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },

  {
    title: "Do you ship to countries outside the EU?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
  }
]

function App() {

  return (
    <div >
       <Accordeon data = { questions }/>
    </div>
  );
}

//Recebe uma lista (data) como prop, de forma que pode ser reutilizado para diferentes listas.
const Accordeon = ({ data }) => {

  const [isOpen, setIsOpen] = useState(null);

  return (
  <div className="container">
    {data.map((quest, index) => {
      return <Question 
                question = {quest} 
                index = {index} 
                key = {quest.title} 
                isOpen = {isOpen}
                setIsOpen = {setIsOpen}
              />
    })}
  </div>
  );
}

const Question = ({index, question, isOpen, setIsOpen}) =>{

  const open = isOpen === index;

  const openCloseItem = () => {
    setIsOpen(open ? null :  index);
  }

  return (
    <div className={`quest-container ${ open && 'quest-open' }`} >
      <div className="flex">
          <div className={ `${open && 'green'} flex`}>
            <h2 className = "quest-num" > { index < 9 ? `0${index+1}` : index+1 }</h2>
            <h2 className="quest-title"> { question.title } </h2> 
          </div>
          

        <button className= { "quest-bttm" } onClick={ () => openCloseItem() }> { open ? "-" : "+" } </button>
      </div>
      
      {open && <p className="quest-p"> { question.answer } </p>}
      
    </div>
  );
}

export default App;
