import React from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup';

import Input from '../Input'
import '../Form.css'
  
  
const schema = yup.object().shape({
  username: yup.string().required("Can't be blank!"),
});

export default function Username({nextStep, data}) {


  const handleSubmit = (values) => {
    nextStep(values);
  }

  return (
    <Formik 
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >

      {() => (
        <Form>
          <Input name = "username" type="text" label = "username" required={true}/>

          <div className='flex justify-end'>
            <button type = "submit" className='bttm bttm-next' >Next</button>
          </div>
        </Form>
      )}

    </Formik>
  )
}
