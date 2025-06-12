import React from 'react';
import { useTheme } from '@mui/material/styles';

const UnderTheHood = () => {
  const theme = useTheme();
  const codeBlockStyle = {
    backgroundColor: theme.palette.mode === 'dark' ? '#111' : '#f5f5f5',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '6px',
    padding: '12px',
    width: '89%',
    display: 'inline-block',
    textAlign: 'left',
    fontFamily: 'monospace',
    fontSize: '0.95rem',
    color: theme.palette.text.primary,
    marginTop: '8px',
    marginBottom: '1.16rem',
  };

  return (
    <div style={{ padding: '.3rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <img
          src="https://suign.github.io/assets/imgs/netget1.png"
          alt="netget"
          width="300px"
          style={{
            filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
          }}
        />
      </div>

      <h2 style={{ marginBottom: '1rem' }}>Under the Hood</h2>

      <p>
        <strong>Netget</strong> installs globally via <code>npm</code> and sets up a <strong>CLI</strong> to manage routing and certificates easily from your terminal.
      </p>
      <p>
        Under the hood, it runs on{' '}
        <a href="https://openresty.org/" target="_blank" rel="noopener noreferrer">
          <strong>OpenResty</strong>
        </a>
        , a powerful web platform built on{' '}
        <a href="https://nginx.org/" target="_blank" rel="noopener noreferrer">
          <strong>Nginx</strong>
        </a>
        . This enables dynamic reconfiguration of domains and routes without restarting the server.
      </p>
      <p>
        <strong>Netget</strong> listens on <strong>HTTP</strong> and <strong>HTTPS</strong> ports, automatically upgrading traffic to secure <strong>HTTPS</strong> connections.
      </p>
      <p>
        Incoming requests are resolved through a local <strong>SQLite</strong> database embedded in the <strong>netget</strong> package, mapping registered domains or subdomains to a port or static path.
      </p>
      <p>
        It integrates with{' '}
        <a href="https://certbot.eff.org/" target="_blank" rel="noopener noreferrer">
          <strong>Certbot</strong>
        </a>{' '}
        and{' '}
        <a href="https://letsencrypt.org/" target="_blank" rel="noopener noreferrer">
          <strong>Let’s Encrypt</strong>
        </a>{' '}
        to automatically issue and renew certificates — including wildcard support — making <strong>HTTPS</strong> effortless and scalable across subdomains.
      </p>
      <p>
        You can assign a main domain name to the server where <strong>netget</strong> is running — often called your <strong>main server</strong>. In your DNS provider, set a <strong>CNAME</strong> or <strong>A Record</strong> pointing to your netget server’s public IP.
      </p>
      <p>For example, using a wildcard:</p>
      <div style={codeBlockStyle}>
        *.example.com → A Record to netget's Public IP
      </div>
      <p>Then, within netget:</p>
      <div style={codeBlockStyle}>
        a.example.com → port 9000<br />
        b.example.com → port 9001<br />
        c.example.com → static path
      </div>
      <p>Netget will route all traffic accordingly and handle <strong>SSL certificates</strong> for each.</p>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a
          href="/quickstart"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            border: `1px solid ${theme.palette.text.primary}`,
            borderRadius: '5px',
            color: theme.palette.text.primary,
            textDecoration: 'none',
            fontSize: '15px',
            transition: 'background-color 0.3s ease, color 0.3s ease',
            backgroundColor: 'transparent',
          }}
        >
          QuickStart
        </a>
      </div>
    </div>
  );
};

export default UnderTheHood;
