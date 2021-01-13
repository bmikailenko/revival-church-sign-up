import React from 'react';
import './Form.css';

const FormSuccess = () => {
    return (
        <div className='form-content-right'>
            <div className='form-success'>
                We have recieved your request! 
                <br />
                Someone from the worship ministry will contact you soon.
                <br />
                <a href="/">
                Submit another application?
                </a>
            </div>
        </div>
    )
}

export default FormSuccess
