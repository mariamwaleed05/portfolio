import React from 'react';
import skillsBasket from '../imgs/skillsbasket.png';
import softwareBasket from '../imgs/softwarebasket.png';

const Baskets = () => {
  return (
    <div className="baskets">
      <div className="ffleex">
        <h2 className="name-basket">Skills</h2>
        <img src={skillsBasket} className="ddd" alt="Skills Basket" />
      </div>

      <div className="ffleex">
        <h2 className="name-basket">Softwares</h2>
        <img src={softwareBasket} className="ddd" alt="Software Basket" />
      </div>
    </div>
  );
};

export default Baskets;