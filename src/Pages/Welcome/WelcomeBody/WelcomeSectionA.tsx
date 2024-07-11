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
    },5000);

    return () => clearInterval(interval);
  }, [paragraphs.length]);

  return (
    <div className="welcome-section-a">
      <div>
      <p className='animated-text'>
        {paragraphs[index]} 
      </p>
      </div>

      <div className='ratings'>
        <p>#1</p>
       <div className='star-rating'>
        <img src='public/icons8-star-48.png' />
        <img src='public/icons8-star-48.png' />
        <img src='public/icons8-star-48.png' />
        <img src='public/icons8-star-48.png' />
        <img src='public/icons8-star-48.png' />
        <img src='public/icons8-star-48.png' />
       </div>
        <p className='users-size'>30M+ Users</p>
        <p>100k+ ratings</p>
      </div>

      
      <div className='available'>
        <p>Also Available On</p>
       <div className="browsers">
        <img src='public/icons8-android-64.png' alt='icon'/>
        <img src='public/icons8-chrome-48.png' alt='icon'/>
        <img src='public/icons8-firefox-48.png' alt='icon'/>
        <img src='public/icons8-ios-64.png' alt='icon'/>
        <img src='/public/icons8-opera-64.png' alt='icon'/>
        <img src='public/icons8-safari-100.png' />
       </div>
      </div>

    </div>
  )
}

export default WelcomeSectionA
