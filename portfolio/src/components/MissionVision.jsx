import React, { useEffect, useState } from 'react';
import { supabase } from './../Supabase';

const MissionVision = () => {
  const [content, setContent] = useState({ mission: '', vision: '' });

  useEffect(() => {
    const fetchContent = async () => {
      const { data } = await supabase
        .from('About')
        .select('MissionEN, VissionEN')
        .limit(1)
        .single();

      if (data) {
        setContent({
          mission: data.MissionEN,
          vision: data.VissionEN
        });
      }
    };

    fetchContent();
  }, []);

  return (
    <>
      <h2 className="name-basket bbt">Vision & Mission</h2>
      <section className="mission-vision">
        <h2 className="title-vision">Vision</h2>
        <div className="vision-box">
          <p className="text-vision">
            {content.vision || "Loading..."}
          </p>
        </div>

        <h2 className="title-mission">Mission</h2>

        <div className="mission-box">
          <p className="text-mission">
            {content.mission || "Loading..."}
          </p>
        </div>
      </section>
    </>
  );
};

export default MissionVision;