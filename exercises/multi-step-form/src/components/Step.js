import React from 'react'
import './Step.css'

export default function Step({index, checked = false}) {
  return (
    <div className={checked && "checked"} >Step {index}</div>
  )
}
