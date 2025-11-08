import React from 'react';

import nileLogo from '../imgs/nilelogo.png';
import euilogo from '../imgs/EUI Logo no text 1.png'; 
import cameraIcon from '../imgs/camera.png';
import eimsLogo from '../imgs/1.png';
import sprintsLogo from '../imgs/4.png';
import twentiesLogo from '../imgs/6.png';
import platformLogo from '../imgs/2.png';
import amchamLogo from '../imgs/5.png';
import platterLogo from '../imgs/7.png';
import proartLogo from '../imgs/3.png';
import hermanasLogo from '../imgs/8.png';
import lemmetravelLogo from '../imgs/9.png';
import arrow from '../icons/arrow.svg';

const ProfileSection = () => {
  const educationData = [
    {
      logo: nileLogo, 
      alt: 'Nile International Egyptian School Logo',
      title: 'Nile International Egyptian School',
      description: 'Nile Systems',
    },
    {
      logo: euilogo, 
      alt: 'Egypt University Of Informatics Logo',
      title: 'Egypt University Of Informatics',
      description: 'Digital Arts & Design',
      subDescription: 'Student - UX/UI Design',
    },
  ];

  const hobbiesData = [
    { icon: cameraIcon, text: 'Photography' },
    { icon: cameraIcon, text: 'Photography' },
    { icon: cameraIcon, text: 'Photography' },
    { icon: cameraIcon, text: 'Photography' },
    { icon: cameraIcon, text: 'Photography' },
    { icon: cameraIcon, text: 'Photography' },
  ];

  const workExperienceData = [
    { logo: eimsLogo, alt: 'EIMS Logo', company: 'EIMS', position: 'Graphic Designer' },
    { logo: sprintsLogo, alt: 'Sprints Logo', company: 'Sprints', position: 'UX/UI Diploma' },
    { logo: twentiesLogo, alt: 'Twenties Logo', company: 'Twenties', position: 'Content Creator' },
    { logo: platformLogo, alt: 'Platform Logo', company: 'Platform', position: 'Graphic Diploma' },
    { logo: amchamLogo, alt: 'Amcham Logo', company: 'Amcham', position: 'Graphic Designer' },
    { logo: platterLogo, alt: 'Platter Logo', company: 'Platter', position: 'Graphic Designer' },
    { logo: proartLogo, alt: 'ProArt Logo', company: 'ProArt', position: 'Graphic Designer' },
    { logo: hermanasLogo, alt: 'Hermanas Logo', company: 'Hermanas', position: 'Account Manager' },
    { logo: lemmetravelLogo, alt: 'LemmeTravel Logo', company: 'LemmeTravel', position: 'UX/UI Designer' },
  ];

  return (
    <section className="profile-section">
      <div className="top-row-content">
        <div className="education-section">
          <h2 className="section-title">Education</h2>
          {educationData.map((item, index) => (
            <div className="education-item" key={index}>
              <div className="icon-container">
                <img src={item.logo} alt={item.alt} />
              </div>
              <div className="details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.subDescription && <p>{item.subDescription}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="hobbies-section">
          <h2 className="section-title">Hobbies</h2>
          <div className="hobbies-grid">
            {hobbiesData.map((item, index) => (
              <div className="hobby-item" key={index}>
                <img src={item.icon} alt={item.text + " Icon"} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="work-experience-section">
        <h2 className="section-title">Work Experience</h2>
        <div className="work-grid">
          {workExperienceData.map((item, index) => (
            <div className="work-item" key={index}>
              <div className="logo-circle">
                <img src={item.logo} alt={item.alt} />
              </div>
              <div className="details">
                <h3>{item.company}</h3>
                <p>{item.position}</p>
              </div>
              <span className="arrow"><img src={arrow}/></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;