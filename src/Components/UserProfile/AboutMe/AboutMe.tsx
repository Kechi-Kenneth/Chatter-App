import React from 'react'
import { AboutMeProps } from '../../Types/UserInfo'
import './AboutMe.css'
const AboutMe:React.FC <AboutMeProps> = ({userDetails}) => {
  return (
    <div className='about-me'>
      <h2>About Me</h2>
      <p className='about-me-bio'><strong></strong> {userDetails.aboutMe}</p>
      <p><strong>Nickame:</strong> {userDetails.bio}</p>
      <p><strong>Age:</strong> {userDetails.age}</p>
      <p><strong>City:</strong> {userDetails.city}</p>
      <p><strong>Joined Date:</strong> {userDetails.joinedDate}</p>
      <p><strong>Date of Birth:</strong> {userDetails.dateOfBirth}</p>
    </div>
  )
}

export default AboutMe
