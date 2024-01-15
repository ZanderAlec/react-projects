import './App.css';

function App() {
  return (
    <div className="container">
        <DisplayScore/>
        <DisplayChoice/>
        <ChoiceBttms/>
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
  return <div className="flex-row">
    <Choice choice = '🖐'/>
    <Choice choice = "🖐"/>
  </div>
}

const Choice = ({choice}) => {
  return <div className="choice">
    <div className='choice-icon'>{choice? choice : "?" }</div>
  </div>
}


const ChoiceBttms = () => {
  return (
    <div className='choices'>
      <div className='flex-row'>
        <ChoiceBttm text = "👊"/>
        <ChoiceBttm text = "✋"/>
        <ChoiceBttm text = "✌"/>
      </div>

      <button className="confirm-bttm">Confirm</button>
    </div>
  );
}

const ChoiceBttm = ({text}) => {
  return <div className='choice-bttm'> 
    {text}
  </div>  
}





export default App;
