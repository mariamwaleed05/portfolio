import React from 'react';
import hangerImage from '../imgs/hanger.png';

export default function HangingCards() {
  const stages = [
    { title: 'LISTEN', subtitle: 'UNDERSTAND\nTHE USER' },
    { title: 'PROTOTYPE', subtitle: 'TRANSLATE\nINSIGHTS' },
    { title: 'DESIGN', subtitle: 'ITERATE\nBASED ON\nFEEDBACK' },
    { title: 'DELIVER' }
  ];

  return (
    <div className="hanging-cards-container">
      <div className="hanging-cards-wrapper">
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-stages">
            {stages.map((stage, idx) => (
              <div key={idx} className="stage-item">
                <div className={`stage-dot ${idx === 3 ? 'active' : ''}`}></div>
                
                <div className="stage-title">{stage.title}</div>
                
              
             
              </div>
            ))}
          </div>
        </div>

        <div className="carrds-container">
          {stages.slice(0, 3).map((stage, idx) => (
            <div key={idx} className="carrd-wrapper">
              <div className="hanger-container">
                <img 
                  src={hangerImage}
                  alt="hanger" 
                  className="hanger-image"
                />
              </div>

              <div className={`carrd carrd-swing-${idx}`}>
                <div className="carrd-clip"></div>
                
                <div className="carrd-frame">
                  <div className="carrd-content">
                    <div className="carrd-text">
                      {stage.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}