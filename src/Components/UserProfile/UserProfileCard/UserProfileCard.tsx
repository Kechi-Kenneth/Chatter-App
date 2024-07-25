import './UserProfileCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


interface UserProfileCardProps {
  backgroundImage: string;
  fullName: string;
  job: string;
  followers: number;
  following: number;
  posts: number;
}

const UserProfileCard:React.FC<UserProfileCardProps> = ({backgroundImage, fullName, job, followers, following,posts}) => {
  return (
    <div className='profile-card'>
        <div className="profile-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <FontAwesomeIcon icon={faUser} className="profile-icon" />
      </div>
      <h3 className='profile-name'>{fullName}</h3>
      <h3 className='profile-job'>{job}</h3>
    
      <div className='profile-stats'>
      <div className="stat">
          <span className="stat-number">{followers.toLocaleString()}K</span>
          <span className="stat-label">Followers</span>
        </div>

        <div className="stat">
          <span className="stat-number">{following.toLocaleString()}</span>
          <span className="stat-label">Following</span>
        </div>
        <div className="stat">
          <span className="stat-number">{posts}+</span>
          <span className="stat-label">Posts</span>
        </div>
      </div>

    </div>
  )
}

export default UserProfileCard
