import React, { Component } from 'react';

const Title = (props) => {
      const maintitle = `h1 ${props.className || ''}`.trim();

    return ( 
        <h1 className={maintitle}>{props.title}</h1>
     );
}
 
export default Title;