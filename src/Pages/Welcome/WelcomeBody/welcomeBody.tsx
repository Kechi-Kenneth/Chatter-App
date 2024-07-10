import React from 'react'
import './WelcomeBody.css'
import WelcomeSectionA from './WelcomeSectionA';

const welcomeBody:React.FC = () => {
  const paragraphs = [
    "Looking for the Bookworms in your location? WELCOME!!!",
    "It is not too late or too early to save the world,we can do it!!",
    "searching for a home like a school,here we are",
    "its a pattern to be hold",   
    "we create friendship here too ",
    "nope",
    "yes",
  ];

  return (
    <section>
      <div className='body'>
      <div className='left-side'>
        <WelcomeSectionA paragraphs={paragraphs} />
      </div>
      <div className="right-side"></div>
      </div>
    </section>
  )
}

export default welcomeBody;
