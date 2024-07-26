import React, { useState } from "react";
import EditAboutMe from "./EditAboutMe/EditAboutMe";
import UserProfileCard from "./UserProfileCard/UserProfileCard";
import AboutMe from "./AboutMe/AboutMe";
import { UserDetails } from "../Types/UserInfo";



const UserProfile:React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    bio: 'This is my bio.',
    age: 30,
    city: 'New York',
    joinedDate: '2020-01-01',
    dateOfBirth: '1990-01-01',
    aboutMe: 'This is the about me paragraph.',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (details: UserDetails) => {
    setUserDetails(details);
    setIsEditing(false);
  };

  return (
 
    <div>
      <UserProfileCard 
      backgroundImage=""
      fullName="Kechi Kenneth"
      job="Software Engineer"
      followers={20}
      following={200}
      posts={50}
      />
 
 <h1>Profile</h1>
      {isEditing ? (
        <EditAboutMe userDetails={userDetails} onSave={handleSave} />
      ) : (
        <>
          <AboutMe userDetails={userDetails} />
          <button onClick={() => setIsEditing(true)}>Edit About Me</button>
        </>
      )}
     
    </div>
    
  );
};

export default UserProfile;
