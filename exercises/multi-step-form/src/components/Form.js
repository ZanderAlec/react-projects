import React, { useState } from 'react'
import StepList from './StepList'

export default function Form() {

  const numSteps = 3;
  const [currStep, setCurrStep] = useState(0);
  function nextStep(){
    setCurrStep(currStep + 1);
  }

  function previousStep(){
    if(currStep-1 >= 0){
      setCurrStep(currStep - 1);
    }
  }
  
  return (
    <div>

        <StepList stepsNum = {3} currStep={currStep}/>
        <form>
            <label for="">Example</label>
            <input />
        </form>


        <button disabled = {currStep === 0} onClick={() => previousStep()}>Previous</button>
        { currStep !== numSteps - 1 ? 
          <button onClick={() => nextStep()}>Next</button>
          : <button > Finish</button>
        }
      

    </div>
  )
}
