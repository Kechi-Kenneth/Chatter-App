import React, { useState } from "react";
import './UserProfile.css'
import EditAboutMe from "./EditAboutMe/EditAboutMe";
import UserProfileCard from "./UserProfileCard/UserProfileCard";
import AboutMe from "./AboutMe/AboutMe";
import { UserDetails } from "../Types/UserInfo";
import OnlineFriends from "./OnlineFriends.tsx/OnlineFriends";

interface Friend {
  id: number;
  name: string;
  job: string;
  profileImage: string;
}

const UserProfile:React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    aboutMe: 'This is the about me paragraph.',
    bio: 'This is my bio.',
    age: 30,
    city: 'New York',
    joinedDate: '2020-01-01',
    dateOfBirth: '1990-01-01',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (details: UserDetails) => {
    setUserDetails(details);
    setIsEditing(false);
  };

  const friendsData: Friend[] = [
    { id: 1, name: 'Alice', job: 'Engineer', profileImage: 'path_to_image1' },
    { id: 2, name: 'Bob', job: 'Designer', profileImage: 'path_to_image2' },
    { id: 3, name: 'Charlie', job: 'Product Manager', profileImage: 'path_to_image3' },
    { id: 4, name: 'David', job: 'Developer', profileImage: 'path_to_image4' },
    { id: 5, name: 'Eve', job: 'Marketing', profileImage: 'path_to_image5' },
    { id: 6, name: 'Frank', job: 'Sales', profileImage: 'path_to_image6' }
  ];
  

  return (
 
    <div className="user-profile">
      <UserProfileCard 
      backgroundImage=""
      fullName="Kechi Kenneth"
      job="Software Engineer"
      followers={20}
      following={200}
      posts={50}
      />
      {isEditing ? (
        <EditAboutMe userDetails={userDetails} onSave={handleSave} />
      ) : (
        <>
          <AboutMe userDetails={userDetails} />
          <button className="edit-about" onClick={() => setIsEditing(true)}>Edit About Me</button>
        </>
      )}
     
     
     <OnlineFriends friends={friendsData} />
    </div>
    
  );
};

export default UserProfile;
