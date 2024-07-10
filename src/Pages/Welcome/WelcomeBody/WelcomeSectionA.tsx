import React from 'react'
import './WelcomeSectionA.css'
import {useEffect,useState } from 'react'


type WelcomeSectionAProps = {
  paragraphs:string[];
}

const WelcomeSectionA:React.FC <WelcomeSectionAProps> = ({paragraphs}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex +1) % paragraphs.length);
    },3000);

    return () => clearInterval(interval);
  }, [paragraphs.length]);

  return (
    <div className="welcome-section-a">
      <p className='animated-text'>
        {paragraphs[index]}
      </p>
    </div>
  )
}

export default WelcomeSectionA
