import React, { Component } from 'react';

const SubTitle = (props) => {
  const subtitle = `h3 ${props.className || ''}`.trim();

    return ( 
        <h3 className={subtitle}>{props.subtitle}</h3>
     );
}
 
export default SubTitle;