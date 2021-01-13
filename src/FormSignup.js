import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';
import { Form, Button, Row, Col } from 'react-bootstrap'
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
        <Row>
          <Col>
            <Form.Group className='form-inputs'>
              <Form.Label htmlFor='firstName' className='form-label'>First Name *</Form.Label>
              <Form.Control id='firstName' type='text' name='firstName' className='form-input' placeholder='John' value={values.firstName} onChange={handleChange}/>
              {errors.firstName && <p className='red-text'>{errors.firstName}</p>}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='form-inputs'>
              <Form.Label htmlFor='firstName' className='form-label'>Last Name *</Form.Label>
              <Form.Control id='lastName' type='text' name='lastName' className='form-input' placeholder='Smith' value={values.lastName} onChange={handleChange}/>
              {errors.lastName && <p className='red-text'>{errors.lastName}</p>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className='form-inputs'>
              <Form.Label htmlFor='email' className='form-label'>Email *</Form.Label>
              <Form.Control id='email' type='text' name='email' className='form-input' placeholder='revival@myrevival.org' value={values.email} onChange={handleChange}/>
              {errors.email && <p className='red-text'>{errors.email}</p>}
            </Form.Group> 
          </Col>
          <Col>
            <Form.Group className='form-inputs'>
              <Form.Label htmlFor='tel' className='form-label'>Phone Number *</Form.Label>
              <Form.Control id='phone' type='tel' name='tel' className='form-input' placeholder='111-111-1111' value={values.tel} onChange={handleChange}/>
              {errors.tel && <p className='red-text'>{errors.tel}</p>}
            </Form.Group>      
          </Col>
        </Row>
        <Form.Group className='form-inputs'>
          <div className='checkbox-group'>
            <Form.Label className='form-label'>Interests</Form.Label>
            <br />
            <Form.Check name='interestVocals' type='checkbox' id='default-checkbox' label='Vocal' value={values.interestVocals} onChange={handleChange} inline/>
            <Form.Check name='interestInstrumental' type='checkbox' id='default-checkbox' label='Instrumental' value={values.interestInstrumental} onChange={handleChange} inline/>
            <Form.Check name='interestSound' type='checkbox' id='default-checkbox' label='Sound' value={values.interestSound} onChange={handleChange} inline/>
            <Form.Check name='interestLights' type='checkbox' id='default-checkbox' label='Lights' value={values.interestLights} onChange={handleChange} inline/>
            <Form.Check name='interestVideo' type='checkbox' id='default-checkbox' label='Video' value={values.interestVideo} onChange={handleChange} inline/>
            <Form.Check name='interestPodcast' type='checkbox' id='default-checkbox' label='Podcast' value={values.interestPodcast} onChange={handleChange} inline/>
          </div> 
        </Form.Group>
        <Form.Group className='form-inputs'>
          <div className='checkbox-group'>
            <Form.Label className='form-label'>Are you a member of our church? *</Form.Label>
            <br />
            <Form.Check name='memberYes' type='checkbox' id='default-checkbox' label='Yes' value={values.memberYes} onChange={handleChange} inline/>
            <Form.Check name='memberNo' type='checkbox' id='default-checkbox' label='No' value={values.memberNo} onChange={handleChange} inline/>
            {errors.member && <p className='red-text'>{errors.member}</p>}
          </div> 
        </Form.Group>
        <Form.Group className='form-inputs'>
          <Form.Label className='form-label'>Please tell a little about yourself</Form.Label>
          <Form.Control as="textarea" id='summary' type='text' name='summary' label='summary' value={values.summary} onChange={handleChange} />
        </Form.Group>
        <br />
        <Row>
          <Col>
            <ReCAPTCHA
            sitekey="6LepGCoaAAAAAI43XumlmTzfqn2Irj6yxRWJJ0RI"
            ref={recaptchaRef}
            /> 
            {errors.recaptcha && <p className='red-text'>{errors.recaptcha}</p>}
          </Col>
          <Col>
            <Button className='form-input-btn' type='submit'>
              Sign Up
            </Button>   
          </Col>
        </Row>    
      </Form>
    </div>
  )
}

export default FormSignup
