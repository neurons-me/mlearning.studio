// src/pages/NotFound.jsx
import React from 'react';
import { useTheme } from '@mui/material/styles';

const NotFound = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    return (
        <div style={{ padding: '50px', textAlign: 'center', color: theme.palette.text.primary }}>
            <img
                src="/netget.png"
                alt="NetGet Logo"
                style={{
                    width: '220px',
                    height: 'auto',
                    marginBottom: '24px',
                    filter: isDarkMode ? 'invert(1)' : 'none',
                }}
            />
            <h1>404 - Page Not Found</h1>
            <p>The requested content could not be found.</p>
            <div style={{ marginTop: '24px' }}>
                <a
                    href="/"
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        border: `1px solid ${theme.palette.divider}`,
                        color: theme.palette.text.secondary,
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        backgroundColor: 'transparent',
                    }}
                >
                    Go Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;