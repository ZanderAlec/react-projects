import './App.css';
import { useState, createContext, useContext, useEffect, useRef   } from 'react';

const options = [
  {id: 1, icon: "👊"},
  {id: 2, icon: "✋"},
  {id: 3, icon: "✌"}
];

export const  AppContext = createContext();

function App() {
  const [choice, setChoice] = useState(null);
  const [botChoice, setBotChoice] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [score, setScore] = useState({user: 0, bot: 0});

  const GenerateBotChoice = ()=>{
    setBotChoice(Math.floor(Math.random() * 3 )+ 1)
  }


  return (
    <AppContext.Provider value = {{choice, botChoice, setBotChoice, GenerateBotChoice, setChoice, options, confirm, setConfirm, score, setScore}}>
      <div className="app">

        <div className="container">
          <DisplayScore/>
          <DisplayChoice />
          <ChoiceBttms />
        </div>
        
        {confirm && <ShowResult/>}
      </div>

    </AppContext.Provider>
  );
}

const DisplayScore = () => {
  const { score } = useContext(AppContext);

  return (
    <div className="flex-row">
      <Score name = "User" score = {score.user}/>
      <Score name = "Bot" score = {score.bot}/>
    </div>);
}


const Score = ({name, score}) => {


  return <div className='score'>
    <h2>{name}:</h2>
    <h2 >{score > 9? score : `0${score}`}  </h2>
  </div>
}

const DisplayChoice = () => {
  const { options, choice, botChoice, setBotChoice, confirm} = useContext(AppContext);

  setBotChoice(Math.floor(Math.random() * 3 )+ 1)

  return <div className="flex-row">
    <Choice choice = {confirm ? options[choice-1].icon : "❓" }/>
    <Choice choice = {confirm ? options[botChoice-1].icon : "❓" }/>
  </div>
}

const Choice = ({choice}) => {
  return <div className="choice">
    <div className='choice-icon'>{choice}</div>
  </div>
}


const ChoiceBttms = () => {
  const { options} = useContext(AppContext);

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

      <ConfirmChoiceBttm/>
    </div>
  );
}

const ConfirmChoiceBttm = () => {
  const { setConfirm, choice} = useContext(AppContext);
  return <button 
    onClick = {() => setConfirm(true)} 
    className="confirm-bttm"
    disabled = {!choice}
    >Confirm</button>
}

const ChoiceBttm = ({id, children}) => {

  const { choice, setChoice, confirm } = useContext(AppContext);
  const clicked = choice === id ? true : false;

  return <div  onClick = {() => { !confirm && setChoice(id)}} className={`choice-bttm ${clicked && "clicked"}`}> 
    {children}
  </div>  
}


const ShowResult = () => {

  const {choice, botChoice, setChoice, setBotChoice, setConfirm, setScore, score} = useContext(AppContext);
  let result = null;
  let newScore = null;

  (function(){

    if(choice == botChoice){
      newScore = {user: score.user+1, bot: score.bot+1};
      return result = "Empate!";
    }
  
    if(choice == 1 &&  botChoice  == 3 || 
      choice ==  3 &&  botChoice == 2 ||
      choice ==  2 &&  botChoice == 1
    ){
      newScore = {user: score.user+1, bot: score.bot};
      return result = "Victory!";
    }
    
    newScore ={user: score.user, bot: score.bot+1};
    return result = "Defeat!"

  })();

  const resetGame = () => {
    setChoice(null);
    setBotChoice(null);
    setConfirm(false);
    setScore(newScore);
  } 

  return <div className="dark-bkg">
    <div className="result-card">
        <h2 className="result-text">{result}</h2>
        <button onClick ={() => resetGame()} className="confirm-bttm">continue</button>
    </div>
  </div>
}



export default App;
