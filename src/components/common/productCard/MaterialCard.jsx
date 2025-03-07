import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from "react-router-dom";



const MaterialCard = ({ title, price, description, imageUrl, id }) => {

    return (
        <Card sx={{
            width: { xs: 230, sm: 260, md: 260 },
            height: 425,
            backgroundColor: "#FAF3C9",
            boxShadow: "5px 5px 10px rgba(44, 14, 20, 0.3)",
            borderRadius: "10px",
            transition: "transform 0.3s",
            "&:hover": {
                transform: "scale(1.02)",
            }
        }}>
            <CardActionArea sx={{ alignSelf: "center" }}>
                <CardMedia
                    component="img"
                    image={imageUrl}
                    alt={title}
                    sx={{
                        height: { xs: 180, sm: 200 },
                        borderRadius: "10px 10px 0 0",
                        objectFit: "cover",
                    }}
                />
                <CardContent sx={{ pb: 1, height: "130px" }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: "bold",
                            textTransform: 'uppercase',
                            color: '#2C0E14',
                            fontSize: { xs: "1rem", md: "1.25rem" },
                            textAlign: "center",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 400,
                            color: '#2C0E14',
                            fontSize: { xs: "0.75rem", sm: "1rem", md: "0.9rem" },
                            textAlign: "center"
                        }}
                    >
                        {description}
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{
                            letterSpacing: '1px',
                            fontWeight: "bold",
                            color: '#F0461A',
                            mt: 0.5,
                            textAlign: "center"
                        }}
                    >
                        ${price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center", alignContent: "center", height: "100px" }}>
                <Link to={`/itemDetail/${id}`}>
                    <Button
                        size="small"
                        sx={{
                            backgroundColor: '#FB6825',
                            color: '#F6EFC6',
                            padding: '4px 8px',
                            fontWeight: 600,
                            borderRadius: "8px",
                            transition: '0.4s',
                            boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
                            '&:hover': { backgroundColor: '#E55C20' }
                        }}
                    >
                        Ver Detalle
                    </Button>
                </Link>
            </CardActions>
        </Card>

    );
}

export default MaterialCard;




// <Card sx={{
//     width: { sx: 150, sm: 160 },
//     height: { sx: 280, sm: 290 },
//     backgroundColor: "#FAF3C9",
//     boxShadow: "5px 5px 10px rgba(44, 14, 20, 0.3)",
//     borderRadius: "12px",
//     transition: "transform 0.3s",
//     "&:hover": {
//         transform: "scale(1.02)",
//     },
// }}>
//     <CardActionArea sx={{ alignSelf: "center" }}>
//         <CardMedia
//             component="img"
//             image={imageUrl}
//             alt={title}
//             sx={{
//                 height: { xs: 160, sm: 180 },  // Ajuste de altura
//                 borderRadius: "12px 12px 0 0",
//                 objectFit: "cover",
//             }}
//         />
//         <CardContent sx={{ pb: 1, height: "80px" }}>
//             <Typography
//                 variant="h6"
//                 component="div"
//                 sx={{
//                     fontWeight: "bold",
//                     textTransform: 'uppercase',
//                     color: '#2C0E14',
//                     fontSize: { xs: "1rem", md: "1.25rem" },
//                     textAlign: "center",
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                     whiteSpace: "nowrap"
//                 }}
//             >
//                 {title}
//             </Typography>

//             <Typography
//                 variant="body1"
//                 component="div"
//                 sx={{
//                     letterSpacing: '1px',
//                     fontWeight: "bold",
//                     color: '#F0461A',
//                     mt: 0.5,
//                     textAlign: "center"
//                 }}
//             >
//                 ${price}
//             </Typography>
//         </CardContent>
//     </CardActionArea>
//     <CardActions sx={{ justifyContent: "center", alignItems: "center", height: "20px" }}>
//         {acompañamiento ? (
//             <Button
//                 size="small"
//                 sx={{
//                     backgroundColor: '#4CAF50',
//                     color: '#fff',
//                     padding: '2px 8px',  // Más compacto
//                     fontWeight: 600,
//                     fontSize: '0.75rem',  // Texto más chico
//                     borderRadius: "6px",
//                     transition: '0.3s',
//                     boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
//                     '&:hover': { backgroundColor: '#388E3C' }
//                 }}
//             >
//                 Agregar
//             </Button>
//         ) : (
//             <Link to={`/itemDetail/${id}`}>
//                 <Button
//                     size="small"
//                     sx={{
//                         backgroundColor: '#FB6825',
//                         color: '#F6EFC6',
//                         padding: '2px 8px',  // Más compacto
//                         fontWeight: 600,
//                         fontSize: '0.75rem',  // Texto más chico
//                         borderRadius: "6px",
//                         transition: '0.3s',
//                         boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
//                         '&:hover': { backgroundColor: '#E55C20' }
//                     }}
//                 >
//                     Ver Detalle
//                 </Button>
//             </Link>
//         )}
//     </CardActions>
// </Card>