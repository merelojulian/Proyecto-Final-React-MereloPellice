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
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#2C0E14",
      color: "#F6EFC6"
    }}>
      <Box
        sx={{
          textAlign: "center",
          fontSize: "0.8rem",
          padding: "1rem",
          lineHeight: "1.2rem",
          justifyContent: "space-between",
          marginBottom: "-1.5rem"
        }}>
        <Typography sx={{ fontSize: "2.5rem", fontWeight: 700 }}>Burguesía</Typography>
        <p>Más que una fantasía</p>
      </Box>
      <Box className="socials">
        <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" >
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
    </Box >
  );
};

export default Footer;


