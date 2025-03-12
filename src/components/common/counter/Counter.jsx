import React, { useContext, useState } from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";




const Counter = ({ item }) => {
  
    const { cart, addToCart, removeProduct } = useContext(CartContext);

    const cantidadEnCarrito = cart.find(product => product.id === item.id)?.quantity || 1;
    const [contador, setContador] = useState(cantidadEnCarrito);


    const onAdd = () => {
        const cantidadEnCarrito = cart.find(product => product.id === item.id)?.quantity || 0;
        const cantidadTotal = cantidadEnCarrito + 1;

        if (cantidadTotal <= item.stock) {
            let objetoParaElCarrito = { ...item, quantity: cantidadTotal };
            addToCart(objetoParaElCarrito);
            toast.success("Se agregó al carrito", { closeButton: true });
            setContador(cantidadTotal);
        } else {
            toast.error("Ya no queda Stock", { closeButton: true });
        }
    };

    const onRemove = () => {
        const cantidadEnCarrito = cart.find(product => product.id === item.id)?.quantity || 0;
        const cantidadTotal = cantidadEnCarrito - 1;

        if (cantidadTotal > 0) {
            let objetoParaElCarrito = { ...item, quantity: cantidadTotal };
            addToCart(objetoParaElCarrito);
            toast.warning("Se eliminó un producto del carrito", { closeButton: true });
            setContador(cantidadTotal);
        } else {
            removeProduct(item);
        }
    };



    return (
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2, justifyContent: "space-between" }}>

            <IconButton variant="text" color="secondary" onClick={onRemove}
                edge="end"
                aria-label="decrease"
                sx={{ mx: 0.1, transform: { xs: 'scale(0.8)', sm: 'scale(1.5)', md: 'scale(1.5)' } }}
            >
                <Remove sx={{ fontSize: '1rem' }} />
            </IconButton>

            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#DF7216", fontSize: { xs: '0.875rem', sm: "1.5rem", md: "2rem" } }}>
                {contador}
            </Typography>

            <IconButton variant="text" color="primary" onClick={onAdd}
                edge="end"
                aria-label="increase"
                sx={{ transform: { xs: 'scale(0.8)', sm: 'scale(1.5)', md: 'scale(1.5)' } }}
            >
                <Add sx={{ fontSize: '1rem' }} />
            </IconButton>


        </Box >
    );
};


export default Counter;

