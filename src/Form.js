import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import { useState } from 'react'; 
import './Form.css';

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img src='img/revival-logo-white.png' className='form-img' alt='revival logo'/>
        </div>
        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess /> }
      </div>
    </> 
  );
}

export default Form;
