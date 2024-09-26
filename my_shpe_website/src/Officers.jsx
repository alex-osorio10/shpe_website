import React from 'react';
import OfficerCard from './OfficerCard'; // Assuming you have an OfficerCard component already
import josePhoto from './assets/images/headshots/jose_photo.png';
import zayraPhoto from './assets/images/headshots/zayra_photo.png';
import estefaniPhoto from './assets/images/headshots/estefani_photo.png';
import valentinaPhoto from './assets/images/headshots/valentina_photo.png';
import alexPhoto from './assets/images/headshots/alex_photo.png';
import joelPhoto from './assets/images/headshots/joel_photo.png';
import tysonPhoto from './assets/images/headshots/tyson_photo.png';
import johnPhoto from './assets/images/headshots/john_photo.png';
import ericPhoto from './assets/images/headshots/eric_photo.png';
import eduardoPhoto from './assets/images/headshots/eduardo_photo.png';

const officerData = [
  {
    name: "Jose Brambila Pelayo",
    title: "Co-President",
    department: "Mechanical Engineering",
    imgSrc: josePhoto,
    linkedInUrl: "https://linkedin.com"
  },
  {
    name: "Zayra Coria-Bustos",
    title: "Co-President",
    department: "Science",
    imgSrc: zayraPhoto,
    linkedInUrl: "https://linkedin.com"
  },
  {
    name: "Estefani Reyes Moreno",
    title: "Communications",
    department: "Electrical Engineering",
    imgSrc: estefaniPhoto,
    linkedInUrl: "https://linkedin.com"
  },
  {
    name: "Valentina Castellanos Ramirez",
    title: "Treasurer",
    department: "Civil Engineering",
    imgSrc: valentinaPhoto,
    linkedInUrl: "https://linkedin.com"
  },
  {
    name: "Alex Osorio Trujillo",
    title: "Marketing/Social Media",
    department: "Computer Science",
    imgSrc: alexPhoto,
    linkedInUrl: "https://www.linkedin.com/in/alex-osorio-trujillo/"
  },
  {
    name: "Joel Garcia-Cervantes",
    title: "VP of Membership",
    department: "Computer Science",
    imgSrc: joelPhoto,
    linkedInUrl: "https://linkedin.com"
  },
  {
    name: "Tyson Ly",
    title: "Secretary",
    department: "Mechanical Engineering",
    imgSrc: tysonPhoto,
    linkedInUrl: "https://linkedin.com"
  },
  {
    name: "John Albert Abed",
    title: "Secretary",
    department: "Mechanical Engineering",
    imgSrc: johnPhoto,
    linkedInUrl: "https://linkedin.com"
  },
  {
    name: "Eric Tran",
    title: "Ambassador",
    department: "Civil Engineering",
    imgSrc: ericPhoto,
    linkedInUrl: "https://linkedin.com"
  },
  {
    name: "Eduardo Rico",
    title: "Ambassador",
    department: "Ambassador",
    imgSrc: eduardoPhoto,
    linkedInUrl: "https://linkedin.com"
  }
];

const Officers = () => {
  return (
    <div className="officers-container">
      <h1>Meet Our Officers</h1>
      <div className="officers-grid">
        {officerData.map((officer, index) => (
          <OfficerCard
            key={index}
            name={officer.name}
            title={officer.title}
            department={officer.department}
            imgSrc={officer.imgSrc}
            linkedInUrl={officer.linkedInUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Officers;
