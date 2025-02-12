
import { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const Counter = ({ item }) => {
    const [contador, setContador] = useState(1);

    const sumar = () => {
        if (contador < item.stock) {
            setContador(contador + 1);
        } else {
            alert("stock máximo");
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        } else {
            alert("minimo 1 producto");
        }
    };

    const onAdd = () => {
        console.log("agregar al carrito");
        let objetoParaElCarrito = { ...item, quantity: contador };
        console.log(objetoParaElCarrito);
    }

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2, // Espacio entre los elementos
                padding: "10px",
            }}
        >
            <Button
                variant="contained"
                color="secondary"
                onClick={restar}
                sx={{
                    borderRadius: "50%",
                    padding: "10px",
                    minWidth: "40px",
                    minHeight: "40px",
                }}
            >
                <Remove />
            </Button>

            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#DF7216" }}>
                {contador}
            </Typography>

            <Button
                variant="contained"
                color="primary"
                onClick={sumar}
                sx={{
                    borderRadius: "50%",
                    padding: "10px",
                    minWidth: "40px",
                    minHeight: "40px",
                }}
            >
                <Add />
            </Button>
        </Box>
    );
}

export default Counter;



