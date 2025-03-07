import { Container, Paper, Typography, List, ListItem, ListItemText, IconButton, Button, Box, CardMedia } from "@mui/material"
import { Delete } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import Swal from 'sweetalert2'
import Counter from "../../common/counter/Counter"



const Cart = () => {
    const { resetCart, cart, removeById, getTotalAmount } = useContext(CartContext);
    let total = getTotalAmount();

    const resetCartWithAlert = () => {
        Swal.fire({
            title: "Seguro quieres vaciar el carrito?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Continuar",
            denyButtonText: "Volver"
        }).then((result) => {
            if (result.isConfirmed) {
                resetCart();
                Swal.fire("Carrito vacío", "Tu carrito ha sido vaciado.", "success");
            } else if (result.isDenied) {
                Swal.fire("Acción cancelada", "No se vació el carrito.", "info");
            }
        });
    };


    return (

        <Box sx={{ bgcolor: "#FAF3C9", minHeight: "100vh", py: 12 }}>
            <Container maxWidth="md">
                <Paper elevation={3} sx={{ p: 3, bgcolor: "#F6EFC6" }}>
                    <Typography variant="h4" gutterBottom sx={{ color: "#2C0E14", fontWeight: "bold" }}>
                        Tu carrito
                    </Typography>
                    <List>
                        {cart.map((elemento) => (
                            <ListItem key={elemento.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: "space-between" }}>

                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                                        <ListItemText
                                            sx={{ alignContent: "center", flex: 1 }}
                                            primary={<Typography sx={{ color: "#2C0E14" }}>{elemento.title}</Typography>}
                                            secondary={<Typography sx={{ color: "#FB7B13" }}>{elemento.price}</Typography>}
                                        />
                                        <CardMedia
                                            component="img"
                                            image={elemento.imageUrl}
                                            alt={elemento.title}
                                            sx={{
                                                height: 70,
                                                width: 70,
                                                borderRadius: "8px",
                                                ml: 2,
                                                objectFit: "cover"
                                            }}
                                        />
                                    </Box>
                                    <Box >
                                        <Counter item={elemento} />
                                    </Box>
                                    <Box>
                                        <IconButton
                                            edge="end"
                                            aria-label="delete"
                                            sx={{ color: "#FB7B13", ml: 1, transform: 'scale(0.8)' }}
                                            onClick={() => removeById(elemento.id)}
                                        >
                                            <Delete sx={{ fontSize: '1rem' }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </ListItem>
                        ))}
                    </List>
                    <Box sx={{ mt: 4, textAlign: "right" }}>
                        <Typography variant="h6" sx={{ mb: 2, color: "#2C0E14" }}>
                            {cart.length > 0 && "Total: $" + total}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "right", gap: 2 }}>
                            <Link to={'/checkout'}>
                                <Button variant="contained" color="primary" size="large" sx={{ color: "white" }}>
                                    Proceder al Pago
                                </Button>
                            </Link>
                            <Button variant="contained" color="error" size="large" sx={{ color: "white" }} onClick={resetCartWithAlert}>
                                Vaciar Carrito
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>

    );
}

export default Cart;
