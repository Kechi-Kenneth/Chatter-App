import React, { useState } from "react"
import { Link } from "react-router-dom";
import { EditAboutMeProps, UserDetails } from "../../Types/UserInfo";


const EditAboutMe:React.FC<EditAboutMeProps> = ({userDetails, onSave}) => {
 const [editDetails, setEditDetails] = useState<UserDetails>(userDetails);

 const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     const { name, value} = e.target;
     setEditDetails({...editDetails, [name]: value });
 };

 const handleSave = () => {
  onSave(editDetails);
 };




 return (
  <div>
    <h2>Edit About Me</h2>
    <div>
      <label>Bio:</label>
      <input type="text" name="bio" value={editDetails.bio} onChange={handleChange} />
    </div>
    <div>
      <label>Age:</label>
      <input type="number" name="age" value={editDetails.age} onChange={handleChange} />
    </div>
    <div>
      <label>City:</label>
      <input type="text" name="city" value={editDetails.city} onChange={handleChange} />
    </div>
    <div>
      <label>Joined Date:</label>
      <input type="date" name="joinedDate" value={editDetails.joinedDate} onChange={handleChange} />
    </div>
    <div>
      <label>Date of Birth:</label>
      <input type="date" name="dateOfBirth" value={editDetails.dateOfBirth} onChange={handleChange} />
    </div>
    <div>
      <label>About Me (750 words max):</label>
      <textarea name="aboutMe" value={editDetails.aboutMe} onChange={handleChange} />
      <p>{editDetails.aboutMe.split(' ').length} / 750 words</p>
    </div>
      <button onClick={handleSave}>Save</button>
  </div>
);
}

export default EditAboutMe;
