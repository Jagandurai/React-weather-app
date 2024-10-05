import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '1rem',
        backgroundColor: 'transparent',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
        marginTop: '20px',
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Jagan all rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="/privacy-policy" color="inherit">Privacy Policy</Link>
        {' | '}
        <Link href="/terms-of-service" color="inherit">Terms of Service</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
