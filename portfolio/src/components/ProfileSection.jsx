import React, { useEffect, useState } from 'react';
import { supabase } from './../Supabase';

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
  const [educationData, setEducationData] = useState([]);
  const [hobbiesData, setHobbiesData] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      const { data: eduData } = await supabase
        .from('Education')
        .select('*')
        .order('id', { ascending: true });

      if (eduData) {
        setEducationData(eduData);
      }

      const { data: hobbyData } = await supabase
        .from('About')
        .select('id, HobbyTitleEN, Hobby_Img')
        .not('HobbyTitleEN', 'is', null);

      if (hobbyData) {
        setHobbiesData(hobbyData);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <section className="profile-section">
      <div className="top-row-content">
        <div className="education-section">
          <h2 className="section-title">Education</h2>
          {educationData.map((item) => (
            <div className="education-item" key={item.id}>
              <div className="icon-container">
                <img src={item.Logo} alt={item.SchoolNameEN} className="w-full h-full object-cover" />
              </div>
              <div className="details">
                <h3>{item.SchoolNameEN}</h3>
                <p>{item.DegreeEN}</p>
                {item.StartYearEN && <p className="text-sm text-gray-400">{item.StartYearEN}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="hobbies-section">
          <h2 className="section-title">Hobbies</h2>
          <div className="hobbies-grid">
            {hobbiesData.map((item) => (
              <div className="hobby-item" key={item.id}>
                <img src={item.Hobby_Img} alt={item.HobbyTitleEN} />
                <span>{item.HobbyTitleEN}</span>
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
              <span className="arrow"><img src={arrow} alt="arrow"/></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;