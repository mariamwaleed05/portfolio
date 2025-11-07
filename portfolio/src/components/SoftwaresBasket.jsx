import React from 'react';

import bbskt from '../imgs/bbskt.png'; 
import images9 from '../imgs/images 9.png';
import images10 from '../imgs/images 10.png';
import images11 from '../imgs/images 11.png';
import images12 from '../imgs/images 12.png';
import images13 from '../imgs/images 13.png';
import images14 from '../imgs/images 14.png';
import images15 from '../imgs/images 15.png';



const SoftwareBasket = () => {
  return (
    <>
      <img src={bbskt} className="basske" alt="Basket" /> 

      <div className="flwex">
        <div className="image-container">
          <img src={images15} className="bassk" alt="Image 15" />
        </div>

        <div className="image-container">
          <img src={images9} className="bassk" alt="Image 9" />
        </div>

        <div className="image-container">
          <img src={images10} className="bassk img" alt="Image 10" />
        </div>

        <div className="image-container">
          <img src={images11} className="bassk img" alt="Image 11" />
        </div>

        <div className="image-container">
          <img src={images12} className="bassk img" alt="Image 12" />
        </div>

        <div className="image-container">
          <img src={images13} className="bassk img" alt="Image 13" />
        </div>

        <div className="image-container">
          <img src={images14} className="bassk img" alt="Image 14" />
        </div>
      </div>
    </>
  );
};

export default SoftwareBasket;