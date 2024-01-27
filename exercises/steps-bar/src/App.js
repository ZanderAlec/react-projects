import './App.css';
import { useState } from 'react';
import confirmIcon from './assets/ok-icon.png' 

const titles = ["Detalhes", "revisão", "Confirmação"];

function App() {

  const [step, setStep] = useState(0)

  const nextStep = () => {
    setStep(step+1);
  }

  const previousStep = () =>{
    if(step-1 >= 0)
      setStep(step-1)
  }

  return (
    <div className="App">
      <StepsBar stepsNum = {5} stepTitles = {titles} step = {step}/>
      <StepsBar stepsNum = {3} />
      
      <button onClick={() => previousStep()} className='continue-bttm'>Voltar</button>
      <button onClick={() => nextStep()} className='continue-bttm'>Continuar</button>
    </div>
  );
}

const StepsBar = ({stepsNum = 3, stepTitles, step}) => {
  
  const curStep = step;

  const steps = [];

  for(let i = 0; i < stepsNum; i++){
    steps.push(
    <Step   
      num = {i+1} 
      title = {stepTitles && stepTitles[i] ? stepTitles[i] : "Step "+(i+1)}
      complete = { i+1 <= curStep ? true : false}
    />
    );
  }

  return <div className="steps-container">
    {steps}
  </div>;
}

const Step = ({num, title, complete}) => {


  return (
    <div class="step-container">
        <div className='step'>
          {complete? <img class="step-icon" src={confirmIcon} alt=""/> : <p class="step-number" >{num}</p>}
        </div>
        <p class="step-title">{title}</p>
    </div>
  );
}

export default App;
