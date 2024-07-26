export interface UserDetails {
  bio: string;
  age: number;
  city: string;
  joinedDate: string;
  dateOfBirth: string;
  aboutMe: string;
}


export interface AboutMeProps {
  userDetails: UserDetails;
}

export interface EditAboutMeProps {
  userDetails: UserDetails;
  onSave: (details: UserDetails) => void;
}