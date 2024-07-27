import React, { useState } from 'react';
import './OnlineFriends.css'



interface Friend {
  id: number;
  name: string;
  job: string;
  profileImage: string;
}

interface OnlineFriendsProps {
  friends: Friend[];
}

const OnlineFriends: React.FC<OnlineFriendsProps> = ({ friends }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleFriends = showAll ? friends : friends.slice(0, 5);

  return (
    <div className='online-friends'>
      <h2>Online Friends</h2>
      <ul>
        {visibleFriends.map(friend => (
          <li key={friend.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img 
              src={friend.profileImage} 
              alt={`${friend.name}'s profile`} 
              style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
            />
            <div>
              <h4 style={{ margin: 0 }}>{friend.name}</h4>
              <p style={{ margin: 0 }}>{friend.job}</p>
            </div>
          </li>
        ))}
      </ul>
      {friends.length > 5 && (
        <button className='see-all-button' onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'See All'}
        </button>
      )}
    </div>
  );
};

// Usage example



export default OnlineFriends;
