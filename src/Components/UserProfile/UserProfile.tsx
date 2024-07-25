import React from "react";
import UserProfileCard from "./UserProfileCard/UserProfileCard";
import AboutMeCard from "./AboutMeCard/AboutMeCard";

const UserProfile:React.FC = () => {
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
      <AboutMeCard 
       heading="About me"
       paragraph="i am here "
       join="12 december"
       city = "abuja"
       country="nigeria"
       date={20-10-20}
       web="yes.com"
      />
    </div>
  )
}

export default UserProfile;
