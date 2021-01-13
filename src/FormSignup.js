import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';
import { Form, Button } from 'react-bootstrap'
import ReCAPTCHA from "react-google-recaptcha";

const FormSignup = ({submitForm}) => {
  const recaptchaRef = React.createRef();
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate, recaptchaRef); 
  
  return (
    <div className='form-content-right'>
      <Form className='form' onSubmit={handleSubmit}>
        <h2>
          Join the worship ministry! Sign up by filling out the information below.
        </h2>
        <Form.Group className='form-inputs'>
          <Form.Label htmlFor='firstName' className='form-label'>First Name *</Form.Label>
          <Form.Control id='firstName' type='text' name='firstName' className='form-input' placeholder='John' value={values.firstName} onChange={handleChange}/>
          {errors.firstName && <p>{errors.firstName}</p>}
        </Form.Group>
        <Form.Group className='form-inputs'>
          <Form.Label htmlFor='firstName' className='form-label'>Last Name *</Form.Label>
          <Form.Control id='lastName' type='text' name='lastName' className='form-input' placeholder='Smith' value={values.lastName} onChange={handleChange}/>
          {errors.lastName && <p>{errors.lastName}</p>}
        </Form.Group>
        <Form.Group className='form-inputs'>
          <Form.Label htmlFor='email' className='form-label'>Email *</Form.Label>
          <Form.Control id='email'  type='text' name='email' className='form-input' placeholder='411 SE Chkalov Dr, Vancouver, WA 98683' value={values.email} onChange={handleChange}/>
          {errors.email && <p>{errors.email}</p>}
        </Form.Group>
        <Form.Group className='form-inputs'>
          <Form.Label htmlFor='tel' className='form-label'>Phone Number *</Form.Label>
          <Form.Control id='phone' type='tel' name='tel' className='form-input' placeholder='111-111-1111' value={values.tel} onChange={handleChange}/>
          {errors.tel && <p>{errors.tel}</p>}
        </Form.Group>
        <br />
        <ReCAPTCHA
          sitekey="6LepGCoaAAAAAI43XumlmTzfqn2Irj6yxRWJJ0RI"
          ref={recaptchaRef}
        /> 
        {errors.recaptcha && <p>{errors.recaptcha}</p>}
        <Button className='form-input-btn' type='submit'>
          Sign Up
        </Button>        
      </Form>
    </div>
  )
}

export default FormSignup
