import React from 'react'
import { AboutMeProps } from '../../Types/UserInfo'

const AboutMe:React.FC <AboutMeProps> = ({userDetails}) => {
  return (
    <div>
      <h2>About Me</h2>
      <p><strong>Bio:</strong> {userDetails.bio}</p>
      <p><strong>Age:</strong> {userDetails.age}</p>
      <p><strong>City:</strong> {userDetails.city}</p>
      <p><strong>Joined Date:</strong> {userDetails.joinedDate}</p>
      <p><strong>Date of Birth:</strong> {userDetails.dateOfBirth}</p>
      <p><strong>About Me:</strong> {userDetails.aboutMe}</p>
    </div>
  )
}

export default AboutMe
