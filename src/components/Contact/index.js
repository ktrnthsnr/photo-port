// import React from 'react';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {

    const [errorMessage, setErrorMessage] = useState('');

    // add hook to manage the form data and state
    // const [formState, setFormState] = useState();
        // set the initial state to empty strings, with three value key-value pairs
        const [formState, setFormState] = useState({ name: '', email: '', message: '' });

            // destructure the formState object into its named properties
            const { name, email, message } = formState;            


        //    // State: assigned initial state values to the input fields in the DOM
        //    // before
        //      <input type="email" name="email" />
        //    // after - added this below
        //    <input type="email" name="email" defaultValue={formState.name} />

        function handleChange(e) {

            // add validation for input (place before setFormState)
            if (e.target.name === 'email') {
                const isValid = validateEmail(e.target.value);
                console.log(isValid);
                // isValid conditional statement
                if (!isValid) {
                    setErrorMessage('Your email is invalid.');
                  }     else {
                        if (!e.target.value.length) {
                        setErrorMessage(`${e.target.name} is required.`);
                        } else {
                        setErrorMessage('');
                        }
                    }

                // console.log('errorMessage', errorMessage);
            }  

        

            // setFormState({...formState, name: e.target.value })
            // setFormState({...formState, [e.target.name]: e.target.value })

            // with error validation
            if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
              }
            
          }          

        //   console.log(formState);

        // function to handle the submission of the form
            // matches this JSX below: <form id="contact-form" onSubmit={handleSubmit}>
            // (Note: this is just the front-end, backend is not functional yet.)
        function handleSubmit(e) {
            e.preventDefault();
            console.log(formState);
          }

        
    // JSX
    return (
            <section>
              <h1>Contact me</h1>
              <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                    </div>
                    <div>                                        
                        <label htmlFor="email">Email address:</label>
                        <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                    </div>
                    <button type="submit">Submit</button>
              </form>
            </section>
    );  
}
    
export default ContactForm;

        //    // State: assigned initial state values to the input fields in the DOM
        //    // before
        //      <input type="email" name="email" />
        //    // after - added this below
        //    <input type="email" name="email" defaultValue={formState.name} />
