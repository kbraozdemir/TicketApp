import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          Sinema Bilet Satın Alım Uygulaması
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {'© '}
          <Link color="inherit" href="https://www.linkedin.com/in/k%C3%BCbra-%C3%B6zdemir-663041223/">
            Kübra Özdemir | LinkedIn
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
