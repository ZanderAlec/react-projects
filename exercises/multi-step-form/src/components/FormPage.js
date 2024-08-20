import React, { useState } from 'react'
import StepList from './StepList'

import './forms/Form.css'
import Username from './forms/Username';
import Email from './forms/Email';
import Password from './forms/Password';


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

  function renderForm(){
    switch(currStep){
      case 0:
        return <Username nextStep = {nextStep}/>;
      case 1:
        return  <Email previousStep = {previousStep} nextStep = {nextStep}/>;
      case 2:
        return <Password previousStep = {previousStep} nextStep = {nextStep}/>;
      default:
        return null;
    }
  }
  
  return (
    <div className="container">
        <StepList stepsNum = {steps.length} currStep={currStep}/>

        <div className='form-container'>
          <h2 className='form-title'>
            {steps[currStep].title}
          </h2>

          {renderForm()}
        </div>  
    </div>
  )
}
