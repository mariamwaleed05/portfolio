import React from 'react';

const DesignerProfile = ({ designer }) => {
    const bgImage = designer.Picture ? `url(${designer.Picture})` : '#333';

    return (
        <div className="profile">
            <div className="text">
                <h2>{designer.NameEN}</h2>
                
                <h3>{designer.JobTitleEN}</h3>
                
                <p>{designer.YearsEN}</p>
                
                <p>{designer.BioEN}</p>
            </div>
            
            <div className="right">
                <div 
                    className="box" 
                    style={{ 
                        backgroundImage: bgImage,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                
          
                <a
                    href={designer.PortfolioLink || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Portfolio →
                </a>
            </div>
        </div>
    );
};

export default DesignerProfile;