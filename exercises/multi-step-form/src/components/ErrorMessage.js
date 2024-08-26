import React from 'react'
import { FaExclamationCircle } from "react-icons/fa";


import "./Form.css"

export default function ErrorMessage({message}) {
  return (
    <p className='error'>
        <FaExclamationCircle />
        {message}
    </p>
  )
}
