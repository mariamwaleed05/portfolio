import React, { Component } from 'react';
import './Title.css';

const Title = (props) => {
      const maintitle = `h1 ${props.className || ''}`.trim();

    return ( 
        <h1 className={maintitle}>{props.title}</h1>
     );
}
 
export default Title;