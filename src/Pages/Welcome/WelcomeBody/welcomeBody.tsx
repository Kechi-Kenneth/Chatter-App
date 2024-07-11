import React from 'react'
import './WelcomeBody.css'
import WelcomeSectionA from './WelcomeSectionA';

const welcomeBody:React.FC = () => {
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
        <button style={{marginTop:-15}} className='create-account'>Create Account</button>
        <p>By signing up,you agree to the terms and privacy policy,including Cookie Use.</p>
        <div>
        <div>
         <p> Already have an Account? <span><button>Sign in</button></span></p>
          
        </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default welcomeBody;
