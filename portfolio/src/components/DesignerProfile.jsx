import React from 'react';
import Designer from '../components/Designer'; 

const DesignerProfile = ({ Designer }) => {
    return (
        <div className="profile">
            <div className="text">
                <h2>{Designer.name}</h2>
                <h3>{Designer.title}</h3>
                <p>{Designer.experienceLocation}</p>
                <p>{Designer.bio1}</p>
                <p>{Designer.bio2}</p>
            </div>
            <div className="right">
                <div className="box"></div>
                <a
                    href={Designer.portfolioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {Designer.linkText}
                </a>
            </div>
        </div>
    );
};

export default DesignerProfile;