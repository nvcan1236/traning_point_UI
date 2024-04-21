/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Input from './Input'

export default function FormGroup({id, label, vertical, className, ...props }) {
  return (
    <div className={`flex gap-x-4 ${vertical?'flex-col items-start': 'items-center'}  ${className}`}>
      <label htmlFor={id} className="mb-2">{label}</label>
      {
        props.children
      }
    </div>
  )
}
