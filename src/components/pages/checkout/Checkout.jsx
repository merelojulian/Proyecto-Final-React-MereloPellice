import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { TextField, Typography, Container, Paper, Box, Button } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router";

const Checkout = () => {
    const { cart, getTotalAmount, resetCart } = useContext(CartContext);
    const [isLoading, setIsLoading] = useState();
    const [user, setUser] = useState({
        nombre: "",
        email: "",
        telefono: "",
    });
    const [orderId, setOrderId] = useState(null);

    const handleSubmit = (evento) => {
        evento.preventDefault();
        let total = getTotalAmount();

        let order = {
            buyer: user,
            items: cart,
            total: total,
        };

        let refCollection = collection(db, "orders");
        const promiseResponse = addDoc(refCollection, order);
        promiseResponse
            .then((res) => {
                setOrderId(res.id);
                resetCart();
                setIsLoading(false);
            })
            .catch((error) => alert({ error }));

        let productsCollection = collection(db, "product");

        order.items.forEach((item) => {
            let productRef = doc(productsCollection, item.id);
            updateDoc(productRef, { stock: item.stock - item.quantity });
        });
    };

    const handleChange = (evento) => {
        const { value, name } = evento.target;
        setUser({ ...user, [name]: value });
    };

    let total = getTotalAmount();

    return (
        <div style={{ minHeight: "100vh" }}>
            {!isLoading && orderId && (
                <Container
                    maxWidth="md"
                    sx={{
                        mt: 4,
                        mb: 4,
                        py: 10,
                        bgcolor: "#F6EFC6",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "80vh",
                        borderRadius: 3,
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            borderRadius: 3,
                            bgcolor: "#FAF3C9",
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                color: "#2C0E14",
                                fontWeight: 600,
                            }}
                        >
                            Gracias por tu compra, tu ticket es{" "}
                            <span style={{ color: "#FB7B13" }}>{orderId}</span>
                        </Typography>
                    </Paper>

                    <Link to="/" style={{ textDecoration: "none", marginTop: 20 }}>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#FB7B13",
                                color: "#FAF3C9",
                                borderRadius: 8,
                                textTransform: "none",
                                "&:hover": {
                                    bgcolor: "#FB6825",
                                },
                            }}
                        >
                            Volver
                        </Button>
                    </Link>
                </Container>
            )}

            {!isLoading && !orderId && (
                <form>
                    <Container maxWidth="md" sx={{ mt: 4, mb: 4, py: 10 }}>
                        <Paper
                            elevation={3}
                            sx={{ p: 4, borderRadius: 3, backgroundColor: "#F6EFC6" }}
                        >
                            <Typography variant="h5" gutterBottom>
                                Checkout
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="text"
                                        name="nombre"
                                        label="Nombre"
                                        fullWidth
                                        autoComplete="nombre"
                                        variant="outlined"
                                        onChange={handleChange}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#FB7B13",
                                                },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": {
                                                color: "#FB7B13",
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        label="Apellido"
                                        type="text"
                                        name="Apellido"
                                        fullWidth
                                        autoComplete="apellido"
                                        variant="outlined"
                                        onChange={handleChange}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#FB7B13",
                                                },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": {
                                                color: "#FB7B13",
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        label="Calle"
                                        type="text"
                                        name="Calle"
                                        autoComplete="calle"
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleChange}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#FB7B13",
                                                },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": {
                                                color: "#FB7B13",
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Numeración"
                                        type="number"
                                        name="Numeración"
                                        autoComplete="numeración"
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleChange}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#FB7B13",
                                                },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": {
                                                color: "#FB7B13",
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        label="Ciudad"
                                        type="text"
                                        name="Ciudad"
                                        fullWidth
                                        autoComplete="ciudad"
                                        variant="outlined"
                                        onChange={handleChange}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#FB7B13",
                                                },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": {
                                                color: "#FB7B13",
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Provincia"
                                        type="text"
                                        name="Provincia"
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleChange}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#FB7B13",
                                                },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": {
                                                color: "#FB7B13",
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        label="Código Postal"
                                        type="number"
                                        name="Código Postal"
                                        fullWidth
                                        autoComplete="shipping postal-code"
                                        variant="outlined"
                                        onChange={handleChange}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#FB7B13",
                                                },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": {
                                                color: "#FB7B13",
                                            },
                                        }}
                                    />
                                </Grid>
                                <Typography variant="h6" gutterBottom sx={{ py: 2 }}>
                                    Total a pagar: $ {total}
                                </Typography>
                            </Grid>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: 1 }}>
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    sx={{
                                        color: "primary",
                                        backgroundColor: "#fff9c4",
                                        "&:hover": {
                                            scale: 1.1,
                                            transition: "0.3s",
                                        },
                                    }}
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                >
                                    Pagar
                                </Button>
                                <Button
                                    type="button"
                                    variant="outlined"
                                    sx={{
                                        color: "#ab003c",
                                        borderColor: "#ab003c",
                                        backgroundColor: "#fff9c4",
                                        "&:hover": {
                                            scale: 1.1,
                                            transition: "0.3s"
                                        },
                                    }}
                                >
                                    Cancelar
                                </Button>
                            </Box>
                        </Paper>
                    </Container>
                </form>
            )}
            {isLoading && <h2>Cargando..</h2>}
        </div>
    );
};

export default Checkout;
