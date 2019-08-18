import React from 'react'
import { Formik } from 'formik'
import validate from './validate-spected'
import getValidationSchema from './getValidationSchema-spected'
import './SignUpForm.css'

const initialValues = {
  name: '',
  email: '',
  zip: ''
}

export default function SignUpFormContainer() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate(getValidationSchema)}
      onSubmit={onSubmit}
      render={SignUpForm}
    />
  )
}

function SignUpForm(props) {
  const { isSubmitting, errors, handleChange, handleSubmit } = props;

  // console.log(errors);
  
  return (
    <div className="form">
      <label className="form-field" htmlFor="name">
        <span>Name:</span>
        <input name="name" type="name" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.name}</div>

      <label className="form-field" htmlFor="email">
        <span>Email:</span>
        <input name="email" type="email" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.email}</div>

      <label className="form-field" htmlFor="zip">
        <span>Zip:</span>
        <input name="zip" type="email" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.zip}</div>

      <button type="submit" onClick={handleSubmit}>{isSubmitting ? 'Loading' : 'Sign Up'}</button>
    </div>
  )
}

function onSubmit(values, { setSubmitting, setErrors }) {
  
    console.log('User has been sucessfully saved!', values);
    
}