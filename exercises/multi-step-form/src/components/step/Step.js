import React from 'react'
import '../step/Step.css'

export default function Step({index, checked = false, style}) {
  return (
    <div className={style} > {index}</div>
  )
}
