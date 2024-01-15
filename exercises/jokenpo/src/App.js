import './App.css';
import { useState, createContext, useContext } from 'react';

const options = [
  {id: 1, icon: "👊"},
  {id: 2, icon: "✋"},
  {id: 3, icon: "✌"}
];

export const  AppContext = createContext();

function App() {
  const [choice, setChoice] = useState(0);
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="container">

        <DisplayScore />

        <AppContext.Provider value = {{choice, setChoice, options, confirm, setConfirm}}>
          <DisplayChoice />
          <ChoiceBttms />
        </AppContext.Provider>

    </div>
  );
}

const DisplayScore = () => {
  return (
    <div className="flex-row">
      <Score name = "User" score = {2}/>
      <Score name = "Bot" score = {0}/>
    </div>);
}

const Score = ({name, score}) => {

  return <div className='score'>
    <h2>{name}:</h2>
    <h2 >{score > 9? score : `0${score}`}  </h2>
  </div>
}

const DisplayChoice = () => {
  const { options, choice, confirm} = useContext(AppContext);

  return <div className="flex-row">
    <Choice choice = {confirm && options[choice-1].icon}/>
    <Choice choice = "🖐"/>
  </div>
}

const Choice = ({choice}) => {
  return <div className="choice">
    <div className='choice-icon'>{choice? choice : "❓" }</div>
  </div>
}


const ChoiceBttms = () => {
  const { options, setConfirm } = useContext(AppContext);

  

  return (
    <div className='choices'>
      <div className='flex-row'>
        {options.map((option) => {
          return (
            <ChoiceBttm  id = {option.id} > 
              {option.icon}
            </ChoiceBttm>
            );
        })}

      </div>


      <button onClick = {() => {setConfirm(true)}} className="confirm-bttm">Confirm</button>
    </div>
  );
}

const ChoiceBttm = ({id, children}) => {

  const { choice, setChoice } = useContext(AppContext);
  const clicked = choice === id ? true : false;

  return <div  onClick = {() => {setChoice(id)}} className={`choice-bttm ${clicked && "clicked"}`}> 
    {children}
  </div>  
}





export default App;
