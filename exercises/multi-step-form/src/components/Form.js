import React, { useState } from 'react'
import StepList from './StepList'

export default function Form() {

  const [currStep, setCurrStep] = useState(0);

  

  return (
    <div>

        <StepList stepsNum = {3} currStep={currStep}/>
        <form>
            <label for="">Example</label>
            <input />
        </form>

       
    </div>
  )
}
