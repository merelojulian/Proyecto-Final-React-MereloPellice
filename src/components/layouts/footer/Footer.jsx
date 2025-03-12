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



// <Box
//   sx={{
//     bgcolor: "#2C0E14",
//     color: "#F6EFC6",
//     p: 3,
//     mt: "auto",
//     position: "relative",
//   }}
// >
//   <Container maxWidth="lg" sx={{
//     display: { sx: "inline-block", sm: "flex", md: "flex" }, justifyContent: "space-between"
//   }}>
//     <Box sx={{ display: "flex", flexWrap: { xs: "wrap", sm: "nowrap", md: "nowrap", }, gap: 2 }}>
//       {/* Datos del Local */}
//       <Box sx={{ textAlign: "center" }}>
//         <Typography gutterBottom sx={{ color: "#FB6825", fontSize: "1.2rem" }}>
//           Datos del Local
//         </Typography>
//         <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
//           Horarios de Atención
//         </Typography>
//         <Typography sx={{ fontSize: "0.9rem" }}>Lunes a Viernes: 9:30 - 18:00</Typography>
//         <Typography sx={{ fontSize: "0.9rem" }}>Sábados: 10:00 - 13:00</Typography>
//         <Typography sx={{ fontSize: "1rem", fontWeight: "bold", mt: 1 }}>
//           Dirección
//         </Typography>
//         <Typography sx={{ fontSize: "0.8rem" }}>
//           Carril Cervantes 1437, Godoy Cruz, Mendoza (M5501RDD)
//         </Typography>
//       </Box>
//     </Box >
//     <Box sx={{ textAlign: "center", width: "100%" }}>
//       <Typography gutterBottom sx={{ color: "#FB6825", fontSize: "1.2rem" }}>
//         Redes Sociales
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           gap: 1.5,
//         }}
//       >
//         <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" sx={{ color: "#F6EFC6", "&:hover": { color: "#FB6825" } }}>
//           <YouTubeIcon />
//         </Link>
//         <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" sx={{ color: "#F6EFC6", "&:hover": { color: "#FB6825" } }}>
//           <FacebookIcon />
//         </Link>
//         <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" sx={{ color: "#F6EFC6", "&:hover": { color: "#FB6825" } }}>
//           <InstagramIcon />
//         </Link>
//         <Link href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" sx={{ color: "#F6EFC6", "&:hover": { color: "#FB6825" } }}>
//           <WhatsAppIcon />
//         </Link>
//       </Box>
//     </Box>
//   </Container >
//   {/* Copyright */}
//   <Container>
//     < Box sx={{ textAlign: "center", mt: 3 }}>
//       <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
//         © 2025 Burguesía - Todos los derechos reservados
//       </Typography>
//     </Box >
//   </Container>
// </Box >