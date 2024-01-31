/* eslint-disable no-unused-vars */
import React from 'react';
import EmailForm from './TeamA_EmailForm';
import { Link } from 'react-router-dom';
import '../Auth.css'; // Assuming you want to include Auth.css

function TeamA_Email() {
  return (
    <div className="email-container">
      <div className="auth-header">
        <img src="/assets/images/companyLogo.png" alt="Logo" className="logo" />
      </div>
      <div className="email-navi">
        <div className="home-button">
          <Link to="/verify">
            <button className="TeamA-button" >Home</button>
          </Link>
        </div>
      </div>
      
      <div className="content">
        <div className="email-sign">
          <EmailForm/>
        </div>
      </div>
    </div>
  );
}

export default TeamA_Email;