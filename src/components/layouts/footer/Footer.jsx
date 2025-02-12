import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Grid from "@mui/material/Grid2";
import { Link } from "react-router";



const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#2C0E14",
        color: "#F6EFC6",
        py: 4,
        mt: 'auto',
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between">

        
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" gutterBottom sx={{ color: "#FB6825" }}>
              Datos del Local
            </Typography>
            <Typography variant="body2" sx={{ color: "#F6EFC6" }}>
              <strong>Horarios de Atención</strong>
            </Typography>
            <Typography variant="body2" sx={{ color: "#F6EFC6" }}>
              Lunes a Viernes: <span>9:30 - 18:00</span>
            </Typography>
            <Typography variant="body2" sx={{ color: "#F6EFC6" }}>
              Sábados: <span>10:00 - 13:00</span>
            </Typography>
            <Typography variant="body2" sx={{ color: "#F6EFC6" }}>
              <strong>Dirección:</strong> Carril Cervantes 1437, Godoy Cruz, Mendoza (M5501RDD)
            </Typography>
          </Grid>

 
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" gutterBottom sx={{ color: "#FB6825" }}>
              Redes Sociales
            </Typography>
            <Box >
              <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YouTubeIcon sx={{color: "#F6EFC6", mr: 2, "&:hover": {color: "#FB6825",},}} />
              </Link>
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon sx={{color: "#F6EFC6", mr: 2, "&:hover": {color: "#FB6825",},}} />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon sx={{color: "#F6EFC6", mr: 2, "&:hover": {color: "#FB6825",},}} />
              </Link>
              <Link href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" >
                <WhatsAppIcon sx={{color: "#F6EFC6", mr: 2, "&:hover": {color: "#FB6825",},}} />
              </Link>
            </Box>
          </Grid>
        </Grid>

       
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#F6EFC6" }}>
            © 2025 Burguesía - Todos los derechos reservados
          </Typography>
        </Box>
      </Container>
    </Box >
  );
};

export default Footer;

