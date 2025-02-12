import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const BurguerSection = () => {
    return (
        <main className="flex-grow">
            <Box
                sx={{
                    backgroundColor: "#F6EFC6",
                    py: 10,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
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

                    <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
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
                        <Button size="small"
                            variant="contained"
                            sx={{
                                backgroundColor: "#FB6825",
                                color: "#F6EFC6",
                                "&:hover": {
                                    backgroundColor: "#003049",
                                },
                                display: "flex",
                                alignItems: "center",
                                px: 4,
                            }}
                        >
                            Pedir ahora
                            <ShoppingCartIcon sx={{ ml: 1 }} />
                        </Button>
                    </Grid>


                    <Grid item xs={12} sm={6} md={6}>
                        <Box
                            component="img"
                            src="https://res.cloudinary.com/dq6tkyvh2/image/upload/v1739312308/amirali-mirhashemian-sc5sTPMrVfk-unsplash_hec9jl.jpg"
                            alt="Delicious Burger"
                            sx={{
                                width: "100%",
                                maxWidth: "500px",
                                height: "auto",
                                borderRadius: "16px",
                                boxShadow: 3,
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </main>

    );
};

export default BurguerSection;

