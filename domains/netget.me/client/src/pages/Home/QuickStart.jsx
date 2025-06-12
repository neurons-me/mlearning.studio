import React from 'react';
import { useTheme } from '@mui/material/styles';

const QuickStart = () => {
  const theme = useTheme();
  return (
    <div style={{ padding: '.3rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <img
          src="https://suign.github.io/assets/imgs/netget1.png"
          alt="netget"
          width="300px"
          style={{
            filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
          }}
        />
      </div>

      <h2><strong>Global Installation - (System-wide CLI)</strong></h2>
    <p>
        Global installation sets up <strong>netget</strong> system-wide, providing access to its <strong>Command Line Interface (CLI)</strong> for configuring network routes and exposing services. It runs as an <strong>npm package</strong>, so make sure you have <a href="https://www.npmjs.com/get-npm" target="_blank" rel="noopener noreferrer">npm installed</a> on your system.
      </p>
      <p><strong>Installation:</strong></p>
      <blockquote><strong>Compatible with Unix-based systems (Linux, macOS) on a Public IP.</strong></blockquote>
      <div style={{
        marginTop: '8px',
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
      }}>
        <div>npm i -g netget</div>
      </div>
      <p><strong>Start netget on your Terminal by running:</strong></p>
      <div style={{
        marginTop: '8px',
        marginBottom: '1.16rem',
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
      }}>
        <div>netget</div>
      </div>

   


      <img src="https://suign.github.io/assets/imgs/netget-art.png" alt="netget" width="244px" style={{ display: 'block', margin: '0 auto' }} />

      <h2><strong>Flow Overview</strong></h2>
      <p>
        When <strong>netget</strong> is installed on your server, it binds to your <strong>public IP</strong> and starts listening for <strong>HTTP</strong> and <strong>HTTPS</strong> traffic.
      </p>
      <p>
        You use the netget <strong>CLI</strong> to register your <strong>domains and subdomains</strong>, specifying where each one should route — either to an internal service (via port) or to a static folder.
      </p>
      <p>All incoming requests are:</p>
      <ul>
        <li>Automatically redirected from <strong>HTTP to HTTPS</strong> for secure connections.</li>
        <li>Matched against the <strong>registered domains</strong>.</li>
        <li>Routed to the appropriate <strong>port</strong> or <strong>static content</strong> you’ve defined.</li>
      </ul>
      <p>
        Netget also manages your <strong>SSL certificates</strong>, issuing and renewing them automatically so you don’t have to worry about HTTPS setup.
      </p>

      <h3>Example Use Case</h3>
      <p>Suppose you own example.com, and you want to:</p>
      <ol>
        <li>Route https://example.com to a <strong>static folder</strong> serving a React web interface.</li>
        <li>Point api.example.com to a <strong>backend service</strong> exposing your API.</li>
      </ol>
      <p>
        With <strong>netget</strong>, you can manage this — and <strong>as many domains and subdomains as needed</strong> — from a single interface.
      </p>
      <p>Simply point your domain(s) DNS <strong>A Record </strong> to your server’s IP address or CNAME to your main server name, then use the netget CLI to:</p>
      <ul>
        <li>Route <strong>example.com</strong> to your React build directory.</li>
        <li>Forward <strong>api.example.com</strong> to the port where your API is running.</li>
      </ul>
      <p>
        <strong>Netget will automatically handle SSL certificates</strong> for all configured endpoints.
      </p>
      <blockquote>
        Just ensure your applications are actively running on the ports defined in netget — it will take care of the routing, HTTPS encryption, and traffic flow.
      </blockquote>

      <hr />

      <h2><strong>Port Management</strong></h2>
      <p>
        Netget includes a built-in <strong>Port Management</strong> module to help you monitor, inspect, and free up ports directly from the CLI.
      </p>
      <p><strong>To access run:</strong></p>
      <div style={{
        marginTop: '8px',
        marginBottom: '1.16rem',
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
      }}>
        <div>netget</div>
      </div>
      <p>Navigate to <strong>Port Management</strong> using the arrow keys.</p>

      <h4>Available Actions:</h4>
      <ul>
        <li><strong>Inspect Port</strong>: See which process is using a specific port, with PID and service info.</li>
        <li><strong>Kill Process on Port</strong>: Free a blocked or stuck port by terminating the process.</li>
      </ul>
      <p>
        Gain full visibility and control over your device’s port allocation and traffic routing.
      </p>

      <hr />

      <h2><strong>Summary</strong></h2>
      <p>
        Whether you're a solo developer or managing infrastructure at scale, <strong>netget</strong> provides a unified way to expose local services, manage traffic, and build modular, decentralized architectures — with ease, flexibility, and security.
      </p>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a
          href="/under-the-hood"
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
          Under the Hood
        </a>
      </div>
    </div>
  );
};

export default QuickStart;
