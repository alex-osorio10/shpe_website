import React from 'react';
import OfficerCard from './OfficerCard'; 
import josePhoto from './assets/images/headshots/jose_photo.webp';
import zayraPhoto from './assets/images/headshots/zayra_photo.webp';
import estefaniPhoto from './assets/images/headshots/estefani_photo.webp';
import valentinaPhoto from './assets/images/headshots/valentina_photo.webp';
import jorgePhoto from './assets/images/headshots/jorge_photo.webp';
import alexPhoto from './assets/images/headshots/alex_photo.webp';
import joelPhoto from './assets/images/headshots/joel_photo.webp';
import tysonPhoto from './assets/images/headshots/tyson_photo.webp';
import johnPhoto from './assets/images/headshots/john_photo.webp';
import ericPhoto from './assets/images/headshots/eric_photo.webp';
import eduardoPhoto from './assets/images/headshots/eduardo_photo.webp';
import yahirPhoto from './assets/images/headshots/yahir_photo.webp';
import adanPhoto from './assets/images/headshots/adan_photo.webp';

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
    title: "Co-Treasurer",
    department: "Civil Engineering",
    imgSrc: valentinaPhoto,
    linkedInUrl: "https://linkedin.com"
  },
  {
    name: "Jorge J. Marquez",
    title: "Co-Treasurer",
    department: "Mechanical Engineering",
    imgSrc: jorgePhoto,
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
    title: "Co-Secretary",
    department: "Mechanical Engineering",
    imgSrc: tysonPhoto,
    linkedInUrl: "https://linkedin.com"
  },
  {
    name: "John Albert Abed",
    title: "Co-Secretary",
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
    department: "Civil Engineering",
    imgSrc: eduardoPhoto,
    linkedInUrl: "https://linkedin.com"
  },
  {
    name: "Yahir Sarabia",
    title: "Fundraising Chair",
    department: "Mechanical Engineering",
    imgSrc: yahirPhoto,
    linkedInUrl: "https://linkedin.com"
  },
  {
    name: "Adan Hernandez",
    title: "Graduate Chair",
    department: "Master's of Computer Science",
    imgSrc: adanPhoto,
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
