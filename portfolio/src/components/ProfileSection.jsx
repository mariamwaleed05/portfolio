import React, { useEffect, useState } from 'react';
import { supabase } from './../Supabase';

import arrow from '../icons/arrow.svg';

const ProfileSection = () => {
  const [educationData, setEducationData] = useState([]);
  const [hobbiesData, setHobbiesData] = useState([]);
  const [workExperienceData, setWorkExperienceData] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      const { data: eduData } = await supabase
        .from('Education')
        .select('*')
        .order('id', { ascending: true });

      if (eduData) setEducationData(eduData);

      const { data: hobbyData } = await supabase
        .from('About')
        .select('id, HobbyTitleEN, Hobby_Img')
        .not('HobbyTitleEN', 'is', null);

      if (hobbyData) setHobbiesData(hobbyData);

      const { data: workData } = await supabase
        .from('BrandsCarousel')
        .select('id, Logo, AltText, Position')
        .not('Position', 'is', null)
        .order('id', { ascending: true });

      if (workData) setWorkExperienceData(workData);
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
          {workExperienceData.length === 0 ? (
            <p>Loading Experience...</p>
          ) : (
            workExperienceData.map((item) => (
              <div className="work-item" key={item.id}>
                <div className="logo-circle">
                  <img src={item.Logo} alt={item.AltText} className="w-full h-full object-cover" />
                </div>
                <div className="details">
                  <h3>{item.AltText}</h3>
                  <p>{item.Position}</p>
                </div>
                <span className="arrow"><img src={arrow} alt="arrow" /></span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;