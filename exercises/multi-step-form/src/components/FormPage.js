import React, { useState } from 'react'
import * as yup from 'yup';

import StepList from './StepList'
import Username from './forms/Username';
import Email from './forms/Email';
import Password from './forms/Password';
import './Form.css'

const initialData = {
  username: "",
  email: "",
  password:  "",
  confirmPassword: "" 
}

const schema = yup.object().shape({
  username: yup.string().required("Can't be blank!"),
  email: yup.string().email().required("Can't be blank!"),
  password: yup.string().min(8).max(20).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required("Passwords Don't Match!")
});


export default function FormPage() {

  const [currStep, setCurrStep] = useState(0);
  const maxSteps = 3;
  const [formData, setFormData] = useState(initialData);

  const nextStep = (newData) => {
    setFormData({...formData, ...newData});

    if(currStep === (maxSteps - 1) )
      return;
      
    setCurrStep(currStep + 1);
  }

  function previousStep(newData){
    setFormData({...formData, ...newData});

    if(currStep-1 >= 0){
      setCurrStep(currStep - 1);
    }
  }

  function renderForm(){
    switch(currStep){
      case 0:
        return <Username nextStep = {nextStep} data={formData}/>;
      case 1:
        return  <Email previousStep = {previousStep} nextStep = {nextStep} data={formData}/>;
      case 2:
        return <Password previousStep = {previousStep} nextStep = {nextStep} data={formData}/>;
      default:
        return null;
    }
  }


  return (
    <div className="container">
        <StepList stepsNum = {maxSteps} currStep={currStep}/>

        <div className='form-container'>
          <h2 className='form-title'>
            Step {currStep+1}
          </h2>

          {renderForm()}
        </div>  
    </div>
  )
}
