import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

const Home = () => {
  const theme = useTheme();
  const dynamicButtonStyle = {
    display: 'inline-block',
    padding: '8px 21px',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: '5px',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontSize: '15px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    backgroundColor: 'transparent',
  };

  return (
    <div style={{ padding: '0.3rem', textAlign: 'center' }}>
      <Link to="/" style={imageLinkStyle}>
        <img
          src="/netget.png"
          alt="Neurons Logo"
          style={{
            ...imageStyle,
            filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
          }}
        />
      </Link>
      <p>
      <strong>Build, Expose, Route — Effortlessly.</strong>
      </p>
      <div style={iconContainerStyle}>
        <a href="https://github.com/neurons-me/netget" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
          <FaGithub />
        </a>
        <a href="https://instagram.com/netget.me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
          <FaInstagram />
        </a>
        <a href="https://facebook.com/neurons.me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com/company/neurons-me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
          <FaLinkedinIn />
        </a>
        <a href="https://www.npmjs.com/package/netget" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
          <CodeIcon />
        </a>
      </div>
      <div style={{ marginTop: '12px', fontSize: '0.95rem', color: theme.palette.text.secondary }}>
        Available for Linux and Unix servers through npm.
      </div>
      <div style={{
        marginTop: '8px',
        backgroundColor: theme.palette.mode === 'dark' ? '#111' : '#f5f5f5',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: '6px',
        padding: '12px',
        width: '55%',
        display: 'inline-block',
        textAlign: 'left',
        fontFamily: 'monospace',
        fontSize: '0.95rem',
        color: theme.palette.text.primary,
      }}>
        <div>npm i -g netget</div>
      </div>
      <div style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
        <Inventory2OutlinedIcon style={{ fontSize: '24px', color: theme.palette.text.primary }} />
        Key Features Version 2.6.x
      </div>
      <div style={{ textAlign: 'left', display: 'inline-block', marginTop: '12px', fontSize: '1rem', maxWidth: '480px' }}>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li><CheckCircleOutlineIcon style={{ fontSize: '18px', color: '#888', marginRight: '6px' }} /><strong>Expose</strong> your IP securely via <strong>HTTPS</strong></li>
          <li><CheckCircleOutlineIcon style={{ fontSize: '18px', color: '#888', marginRight: '6px' }} /><strong>Manage</strong> multiple domains and <strong>SSL certificates</strong></li>
          <li><CheckCircleOutlineIcon style={{ fontSize: '18px', color: '#888', marginRight: '6px' }} /><strong>Route</strong> HTTPS requests to <strong>internal services</strong></li>
          <li><CheckCircleOutlineIcon style={{ fontSize: '18px', color: '#888', marginRight: '6px' }} /><strong>Serve</strong> static content via <strong>HTTPS</strong></li>
          <li><CheckCircleOutlineIcon style={{ fontSize: '18px', color: '#888', marginRight: '6px' }} /><strong>Port management</strong> and built-in diagnostics</li>
          <li><CheckCircleOutlineIcon style={{ fontSize: '18px', color: '#888', marginRight: '6px' }} /><strong>Wildcard certificates</strong> and <strong>subdomain support</strong></li>
        </ul>
      </div>

      <div style={{ marginTop: '34px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
        <Link to="/under-the-hood" style={dynamicButtonStyle}>
          <BuildCircleIcon style={{ fontSize: '18px', marginRight: '6px', color: '#888' }} />
          Under the Hood
        </Link>
        <Link to="/quickstart" style={dynamicButtonStyle}>
          <RocketLaunchIcon style={{ fontSize: '18px', marginRight: '6px', color: '#888' }} />
          Quick Start
        </Link>
        <Link to="https://docs.netget.me/" target="_blank" rel="noopener noreferrer" style={dynamicButtonStyle}>
          <CodeIcon style={{ fontSize: '18px', marginRight: '6px', color: '#888' }} />
          Source Code Docs
        </Link>
      </div>
     
    </div>
  );
};

const imageStyle = {
  width: '300px',
  height: 'auto',
  marginBottom: '-42px',
  cursor: 'pointer',
};

const imageLinkStyle = {
  display: 'inline-block',
  marginBottom: '8px',
};

const iconContainerStyle = {
  marginTop: '3x',
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
};

const iconLinkStyle = {
  color: '#888',
  fontSize: '28px',
  transition: 'color 0.3s ease',
};

export default Home;