import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const useForm = (callback, validate, recaptchaRef) => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        interestVocals: 'no',
        interestInstrumental: 'no',
        interestSound: 'no',
        interestLights: 'no',
        interestVideo: 'no',
        interestPodcast: 'no',
        memberYes: 'no',
        memberNo: 'no',
        summary: ''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        var { name, value } = e.target;
        if (e.target.type === 'checkbox' && e.target.checked)
            value = 'yes';
        if (e.target.type === 'checkbox' && !e.target.checked)
            value = 'no';
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const recaptchaValue = recaptchaRef.current.getValue();
        setErrors(validate(values, recaptchaValue));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
            emailjs.send('service_f6t79e9', 'template_cz3z5kv', values)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            emailjs.send('service_f6t79e9', 'template_pfpiw2r', values)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    },[errors, callback, isSubmitting, values]);

    return { handleChange, values, handleSubmit, errors }
}



export default useForm