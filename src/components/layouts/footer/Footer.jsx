import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2C0E14",
        color: "#F6EFC6",
        py: 4,
        mt: "auto",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          {/* Datos del Local */}
          <Box>
            <Typography gutterBottom sx={{ color: "#FB6825", fontSize: "1.2rem" }}>
              Datos del Local
            </Typography>
            <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
              Horarios de Atención
            </Typography>
            <Typography sx={{ fontSize: "0.9rem" }}>Lunes a Viernes: 9:30 - 18:00</Typography>
            <Typography sx={{ fontSize: "0.9rem" }}>Sábados: 10:00 - 13:00</Typography>
            <Typography sx={{ fontSize: "1rem", fontWeight: "bold", mt: 1 }}>
              Dirección
            </Typography>
            <Typography sx={{ fontSize: "0.9rem" }}>
              Carril Cervantes 1437, Godoy Cruz, Mendoza (M5501RDD)
            </Typography>
          </Box>


          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Typography gutterBottom sx={{ color: "#FB6825", fontSize: "1.2rem" }}>
              Redes Sociales
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1.5,
              }}
            >
              <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" sx={{ color: "#F6EFC6", "&:hover": { color: "#FB6825" } }}>
                <YouTubeIcon />
              </Link>
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" sx={{ color: "#F6EFC6", "&:hover": { color: "#FB6825" } }}>
                <FacebookIcon />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" sx={{ color: "#F6EFC6", "&:hover": { color: "#FB6825" } }}>
                <InstagramIcon />
              </Link>
              <Link href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" sx={{ color: "#F6EFC6", "&:hover": { color: "#FB6825" } }}>
                <WhatsAppIcon />
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            © 2025 Burguesía - Todos los derechos reservados
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

// <Box
//   sx={{
//     bgcolor: "#2C0E14",
//     color: "#F6EFC6",
//     py: 4,
//     mt: "auto",
//     position: "relative",
//   }}
// >
//   <Container maxWidth="lg" sx={{ display: "inline-block" }}>
//     <Box container sx={{ display: "flex", justifyContent: "center" }}>
//       <Box sx={{ color: "#F6EFC6" }}>
//         <Typography gutterBottom sx={{ color: "#FB6825", fontSize: "1.2rem" }}>
//           Datos del Local
//         </Typography>
//         <Typography sx={{ fontSize: "1rem" }}>
//           <strong>Horarios de Atención</strong>
//         </Typography>
//         <Typography sx={{ fontSize: "0.8rem" }}>
//           Lunes a Viernes: <span>9:30 - 18:00</span>
//         </Typography>
//         <Typography sx={{ fontSize: "0.8rem" }}>
//           Sábados: <span>10:00 - 13:00</span>
//         </Typography>
//         <Typography sx={{ fontSize: "1rem" }}>
//           <strong>Dirección:</strong>
//         </Typography>
//         <Typography sx={{ fontSize: "0.8rem" }}>
//           Carril Cervantes 1437, Godoy Cruz, Mendoza (M5501RDD)
//         </Typography>
//       </Box>
//       <Box sx={{ display: "inline-block" }}>
//         <Box sx={{ textAlign: "center", display: "inline-block" }}>
//           <Typography gutterBottom sx={{ color: "#FB6825", fontSize: "1.2rem" }}>
//             Redes Sociales
//           </Typography>
//           <Box sx={{
//             display: "flex", color: "#F6EFC6", mr: 2, "&:hover": { color: "#FB6825" }, gap: 1
//           }}>
//             <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
//               <YouTubeIcon />
//             </Link>
//             <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//               <FacebookIcon />
//             </Link>
//             <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//               <InstagramIcon />
//             </Link>
//             <Link href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" >
//               <WhatsAppIcon />
//             </Link>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//     <Box sx={{ textAlign: "center", padding: "1.5rem" }}>
//       <Typography variant="body2" sx={{ color: "#F6EFC6", fontSize: { xs: "0.7rem" } }}>
//         © 2025 Burguesía - Todos los derechos reservados
//       </Typography>
//     </Box>
//   </Container >
// </Box >