import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";
import '../footer/footer.css';


const Footer = () => {
  return (
    <div className="main-container">
      <Box className="footer">
        <Box className="titulo">
          <Typography sx={{ fontSize: "2.5rem", fontWeight: 700 }}>Burguesía</Typography>
          <p>Más que una fantasía</p>
        </Box>
        <Box className="socials">
          <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <YouTubeIcon className="link" />
          </Link>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="link">
            <FacebookIcon />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="link">
            <InstagramIcon />
          </Link>
          <Link href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="link">
            <WhatsAppIcon />
          </Link>
        </Box>
        <Box className="copyright">
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            © 2025 Burguesía - Todos los derechos reservados
          </Typography>
        </Box>
      </Box>
    </div>

  );
};

export default Footer;


