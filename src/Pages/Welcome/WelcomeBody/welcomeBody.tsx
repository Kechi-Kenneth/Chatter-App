import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './WelcomeBody.css'
import WelcomeSectionA from './WelcomeSectionA';
import DropDownSignUpForm from '../../../Components/DropDownSignUpForm/DropDownSignUpForm';

const welcomeBody:React.FC = () => {
  const [isFormVisible, setFormVisible] = useState (false);

  const handleButtonClick = () =>{
    setFormVisible(!isFormVisible);
  };


  const handleFormSubmit = (formData: { name: string; emailOrNumber: string; birthdate: string; password: string; confirmPassword: string; gender:string; }) => {
    console.log('Form Submitted:', formData);
    setFormVisible(false); // Hide form after submission
  };

  const handleFormClose = () => {
    setFormVisible(false);
  };

  const paragraphs = [
    "Looking for the ",
    "It is not too",
    "searching ",
    "its a patt",   
    "we create ",
    "nope you ",
    "yes we can c",
  ];

  return (
    <section>
      <div className='body'>
      <div className='left-side'>
        <WelcomeSectionA paragraphs={paragraphs} />
      </div>
      <div className="right-side">
        <h3>Happening Right Now</h3>
        <div>
          <p className='join-text'>Join Chatter.</p>
          <button className='google-button'><span><img src="" alt="" /></span>Sign up with Google</button>
         
        </div>
        <button className='apple-button'><span><img src="" alt="" /></span>Sign up with Apple</button>
        <p style={{marginTop:-3}}>Or</p>
        <button style={{marginTop:-15}} className='create-account' onClick={handleButtonClick}>Create Account</button>
        {isFormVisible && (
        <DropDownSignUpForm onSubmit={handleFormSubmit} onClose={handleFormClose} />
      )}
        <p className='terms-condition'>By signing up,you agree to the terms and privacy <br /> policy,including Cookie Use.</p>
        <div>
        <div>
         <p style={{fontSize:20, fontWeight:500, marginTop:-15}}> Already have an Account? </p> 
        </div>
        <div className='okayy'>
        <Link to="/signin">
       <button className='okay'>Sign in</button>
       </Link>
        </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default welcomeBody;
