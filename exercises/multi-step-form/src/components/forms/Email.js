import React from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup';

import Input from '../Input';
import '../Form.css'

const schema = yup.object().shape({
  email: yup.string().email().required("Can't be blank!"),
});

export default function Email({previousStep, nextStep, data}) {

  const handleSubmit = (values) => {
    nextStep(values);
  }

  return (

    <Formik 
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
     {({values}) => (<Form>

          <Input name = "email" type = "email" label = "email" required={true}/>

          <div className='flex'>
            <button 
                type= "button"
                onClick={() => previousStep(values)}
                className='bttm bttm-previous'
              >Previous</button>

            <button 
              type = "submit"
              className='bttm bttm-next'
            >Next</button>
          </div>
      </Form>)}

    </Formik>

  )
}
