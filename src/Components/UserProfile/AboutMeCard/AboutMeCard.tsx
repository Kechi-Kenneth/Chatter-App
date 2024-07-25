import React from "react";

interface AboutMeProps {
  heading: string;
  paragraph: string;
  join: string;
  country: string;
  city: string;
  date: number;
  web: string;
}

const AboutMeCard: React.FC<AboutMeProps> = ({
  heading,
  paragraph,
  join,
  country,
  city,
  date,
  web,
}) => {
  // const [changeParagraph. setChangeParagraph] = useState("");


  return <div className="about-me">
<h2>{heading}</h2>
<p>{paragraph}</p>
<p>Joined:{join}</p>
<p>City:{city}</p>
<p>Date Of Birth{date}</p>
<p>country:{country}</p>
<p>Web{web}</p>
  </div>;
};

export default AboutMeCard;
