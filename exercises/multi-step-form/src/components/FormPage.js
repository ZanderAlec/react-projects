import React, { useState } from 'react'
import StepList from './StepList'
import Form from './Form';


const steps = [
  {
    id: 0,
    title: "Step 1"
  },
  {
    id: 1,
    title: "Step 2"
  },
  {
    id: 2,
    title: "Step 3"
  }
]

export default function FormPage() {

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

        <StepList stepsNum = {steps.length} currStep={currStep}/>
        <Form steps = {steps} currStep = {currStep}/>


        <button disabled = {currStep === 0} onClick={() => previousStep()}>Previous</button>
        { currStep !== (steps.length - 1) ? 
          <button onClick={() => nextStep()}>Next</button>
          : <button > Finish</button>
        }
      

    </div>
  )
}
