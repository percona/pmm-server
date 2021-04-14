import React from 'react';
import logo from '../assets/pmm-logo.png';

export const NavBar = () => (
  <div className="header">
    <div className="nav row">
      <img src={logo} className="header-logo" alt="pmm-logo" />
      <p className="app-title">
        Percona Monitoring and Management
      </p>
    </div>
  </div>
);
