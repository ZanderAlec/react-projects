import React, { useState } from 'react'
import StepList from './StepList'
import Form from './form/Form';


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
    <div className="container">
      <div className='form-box'>
        <StepList stepsNum = {steps.length} currStep={currStep}/>
        <Form steps = {steps} currStep = {currStep}/>

        <div className='flex'>
          
          <button 
            disabled = {currStep === 0} 
            onClick={() => previousStep()}
            className='bttm'
          >Previous</button>
          
          { 
            currStep !== (steps.length - 1) ? 
              <button 
                onClick={() => nextStep()}
                className='bttm'
              >Next</button>

            : <button className='bttm'> Finish</button>
          }

        </div>
        
      </div>
      

    </div>
  )
}
