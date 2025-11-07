import React from 'react';
import './WhoAmI.css'; 

import camera from '../imgs/camera.png';
import img11 from '../imgs/11.png';
import img22 from '../imgs/22.png';
import img33 from '../imgs/33.png';
import img44 from '../imgs/44.png';
import img55 from '../imgs/55.png';
import img66 from '../imgs/66.png';

const WhoAmI = () => {
  return (
    <div className="whoami-wrapper">
      <div className="container-center">
        <h1 className="who">
          WHO AM I? WHO AM I? WHO AM I? WHO AM I? WHO AM I?
        </h1>

        <div className="expansion-group">
          <div className="main-element">
            <img
              src={camera}
              alt="Central Camera Image"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="expanded-element bg-pink-500">
            <img src={img11} alt="Expanded Element 1" />
          </div>
          <div className="expanded-element bg-green-500">
            <img src={img44} alt="Expanded Element 2" />
          </div>
          <div className="expanded-element bg-yellow-500">
            <img src={img33} alt="Expanded Element 3" />
          </div>
          <div className="expanded-element bg-blue-500">
            <img src={img22} alt="Expanded Element 4" />
          </div>
          <div className="expanded-element bg-indigo-500">
            <img src={img55} alt="Expanded Element 5" />
          </div>
          <div className="expanded-element bg-purple-500">
            <img src={img66} alt="Expanded Element 6" />
          </div>
        </div>

        <h2 className="subtt">
          Only thing you will need to know is that I love making{' '}
          <span className="t">unique</span> work that actually{' '}
          <span className="t">stands out.</span>
        </h2>
      </div>
    </div>
  );
};

export default WhoAmI;
