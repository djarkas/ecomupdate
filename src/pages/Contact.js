import React from 'react';
import { useState, useEffect } from "react";


const Contact = () => {
  const initialValues = { name: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const{name, value} = e.target;
    setFormValues({...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  },[formErrors]);

const validate = (values) => {
  const errors = {}
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name){
    errors.name = "Name is required!";
  }
  if (!values.email){
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)){
    errors.email = "This is not a valid email format!";
  }
  return errors;
};

return(
   <>

<body>
    
    <header>
  <h1>Contact</h1>
      </header>
  
        <div class="con">
        
        <h2>Write Us</h2>
        {Object.keys(formErrors).length === 0 && isSubmit ? 
        (<div className = "ui message success">Sent!</div>
        ) : ( 
       <div> </div>
        )}
        <form onSubmit = {handleSubmit}>
          <input
           type="text" 
           name="name" 
           id="name"
            placeholder=" Your Name" 
            value = {formValues.name} 
            onChange = {handleChange}
            />
            <p>{formErrors.name}</p>
            
            <input type="email" name="email" id="email" placeholder="Email" value = {formValues.email} onChange = {handleChange} />
            <p>{formErrors.email}</p>

            <textarea name="message" id="message" cols="30" rows="10" placeholder="Leave us a comment here"></textarea>
            <button ClassName="submit">Send</button>
        </form>
    </div>
  
  
    </body>

</>
)
}

export default Contact;