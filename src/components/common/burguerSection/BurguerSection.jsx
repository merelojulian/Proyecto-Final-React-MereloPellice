import React, { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const BurguerSection = () => {


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);


        return () => clearTimeout(timer);
    }, []);


    return (
        <main className="flex-grow">

            {loading ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        gap: 4,
                        scale: 1.5
                    }}
                >
                    <CircularProgress color="secondary" sx={{ mb: 2 }} />
                    <CircularProgress color="success" sx={{ mb: 2 }} />
                    <CircularProgress color="inherit" sx={{ mb: 2 }} />
                </Box>
            ) : (
                <Box sx={{ backgroundColor: "#F6EFC6", py: 10 }}>
                    <Grid
                        container
                        spacing={4}
                        alignItems="center"
                        justifyContent="center"
                        padding={2}
                        sx={{
                            width: "90%",
                            maxWidth: "1200px",
                            mx: "auto",
                            flexWrap: { sx: "wrap", sm: "nowrap", md: "nowrap" }
                        }}
                    >

                        <Grid xs={12} md={6} sx={{ textAlign: "left" }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#2C0E14",
                                    mb: 2,
                                    fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3.5rem" },
                                }}
                            >
                                Primero ustedes, segundo Francia</Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "#DF7216",
                                    mb: 3,
                                    fontSize: { xs: "1rem", sm: "1.5rem", md: "2.75rem", }
                                }}
                            >
                                Más que una fantasía, una burguesía
                            </Typography>
                            <Button size="small" variant="contained" sx={{ backgroundColor: "#FB6825", color: "#F6EFC6", "&:hover": { backgroundColor: "#003049", }, display: "flex", alignItems: "center", px: 4, }}
                            >
                                Pedir ahora
                                <ShoppingCartIcon sx={{ ml: 1 }} />
                            </Button>
                        </Grid>

                        <Grid xs={12} sm={6} md={6} sx={{ position: "relative" }}>
                            <Box
                                component="img"
                                src="https://res.cloudinary.com/dq6tkyvh2/image/upload/v1739312308/amirali-mirhashemian-sc5sTPMrVfk-unsplash_hec9jl.jpg"
                                alt="Delicious Burger"
                                className="w-full max-w-[500px] h-auto rounded-3xl shadow"
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "8px",
                                    left: "8px",
                                    backgroundColor: "#FB6825",
                                    color: "#F6EFC6",
                                    px: 0.5,
                                    py: 0.5,
                                    fontSize: 10,
                                    borderRadius: "4px",
                                    fontWeight: "bold",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                                }}
                            >
                                Especial de la Semana
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            )}
        </main>

    );
}

export default BurguerSection;

