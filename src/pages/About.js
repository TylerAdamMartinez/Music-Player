import React from 'react';
import '../styles/aboutstyle.css';
import {Links} from 'react-router-dom';

function About() {
  return (
    <div>
      <div className="aboutContainer">
        
        <div className="aboutHeader">
        <h1 className="aboutHeaderText">About</h1>
        </div>
        
        <div className="aboutBody">
        <h2>Body</h2>
        </div>
    
      </div>
    </div>
  );
}

export default About;
