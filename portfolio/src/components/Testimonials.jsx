import React from 'react';
import vec1 from '../imgs/Vector-1.png';
import vec2 from '../imgs/Vector.png';
import vec3 from '../imgs/Vector-3.png';
import vec4 from '../imgs/Vector-2.png';

const Testimonials = () => {
  return (
    <>
      <h2 className="name-basket bbt">Testimonials</h2>
      <div className="Testimonialss">
        <img src={vec1} className="vec1" alt="Vector decoration 1" />
        <img src={vec2} className="vec2" alt="Vector decoration 2" />
        <img src={vec3} className="vec3" alt="Vector decoration 3" />
        <img src={vec4} className="vec4" alt="Vector decoration 4" />
      </div>
    </>
  );
};

export default Testimonials;