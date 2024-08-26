import React from 'react'
import  './Form.css'
import { useField } from 'formik'
import ErrorMessage from './ErrorMessage';


export default function Input({name, type, label, required = false}) {
    const [field, meta] = useField(name);

  return (
    <div className='input-box'>
       { label && 
            <label 
              className={`label ${required && 'label-required'}`} 
              for={name}>
                {label}
            </label>}
        <input 
            className={`input ${meta.error && 'input-error'}`} 
            type={type} 
            {...field}
        />

        {meta.error && meta.touched && <ErrorMessage message = {meta.error}/>}
    </div>
  )
}
