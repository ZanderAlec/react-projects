import React from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup';

import Input from '../Input';
import '../Form.css'

const schema = yup.object().shape({
  password: yup.string().min(8).max(20).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords Don't Match.").required("Passwords Don't Match.")
});

export default function Password({previousStep, nextStep, data}) {

  const handleSubmit = (values) => {
    nextStep(values);
  }

  return (
    <Formik 
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >

      {() => (<Form>

        <Input  name = "password" type = "text" label = "password" required={true}/>      
        <Input  name = "confirmPassword" type = "text" label = "confirmPassword" required={true}/>   

        <div className='flex'>
          <button 
              onClick={() => previousStep()}
              className='bttm bttm bttm-previous'
            >Previous</button>

          <button type="submit" className='bttm bttm-next'> Finish</button>
        </div>
      </Form>)}
    </Formik>
  )
}
