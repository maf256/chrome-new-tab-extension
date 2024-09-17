import React from 'react';
import Grid from '@mui/material/Grid2';
import { Typography, IconButton, Box } from '@mui/material';
import { Home, Code, YouTube, LinkedIn, Email,Facebook } from '@mui/icons-material';
// import SVGFin from '{process.env.PUBLIC_URL + '/finn.png'}
// Example data for favorite links
const favoriteLinks = [
  { name: 'Home', icon: <Home />, url: 'https://www.example.com' },
  { name: 'Gmail', icon: <img src={process.env.PUBLIC_URL + '/gmail.png'} />, url: 'https://gmail.com' },
  { name: 'Drive', icon: <img src={process.env.PUBLIC_URL + '/drive.png'} />, url: 'https://drive.google.com/drive/my-drive' },
  { name: 'Drive', icon: <img src={process.env.PUBLIC_URL + '/doc.png'} />, url: 'https://docs.google.com/document/u/0/' },
  { name: 'GitHub', icon: <img src={process.env.PUBLIC_URL + '/github.png'} />, url: 'https://github.com/maf256' },
  { name: 'YouTube', icon: <img src={process.env.PUBLIC_URL + '/youtube.png'} />, url: 'https://youtube.com' },
  { name: 'LinkedIn', icon: <img src={process.env.PUBLIC_URL + '/linkedin.png'} />, url: 'https://linkedin.com' },
  { name: 'TV NRK', icon: <img src={process.env.PUBLIC_URL + '/nrktv.png'}/>, url: 'https://tv.nrk.no/' },
  { name: 'Klar tale', icon: <img src={process.env.PUBLIC_URL + '/klartale.png'}/>, url: 'https://klartale.no/' },
  { name: 'Chat GPT', icon: <img src={process.env.PUBLIC_URL + '/openai.png'} />, url: 'https://chat.openai.com' },
  { name: 'Facebook', icon: <img src={process.env.PUBLIC_URL + '/facebook.png'} />, url: 'https://chat.openai.com' },
  { name: 'Finn', icon: <img src={process.env.PUBLIC_URL + '/finn.png'} />, url: 'https://finn.no' },
];

const FavoriteLinks = () => {
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ padding: '20px' }}>
      {favoriteLinks.map((link) => (
        <Grid item xs={4} sm={3} md={2} key={link.name} style={{ textAlign: 'center' }}>
          <Box sx={iconContainerStyle}>
            <IconButton
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={iconStyle}
              disableRipple
            >
              {link.icon}
            </IconButton>
          </Box>
          <Typography variant="body1" sx={{ marginTop: '8px', fontSize: '0.9rem' }}>
            {link.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

// Styling for the icons (rounded square like iOS)
const iconContainerStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 64,
  height: 64,
  borderRadius: 16,
  backgroundColor: '#f0f0f0',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
};

const iconStyle = {
  color: '#000',
  fontSize: 32,
};

export default FavoriteLinks;
