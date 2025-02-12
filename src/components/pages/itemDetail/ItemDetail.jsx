
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { products } from "../../../products";
import Counter from "../../common/counter/Counter";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";


export const ItemDetail = ({ }) => {

    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {

        let producto = products.find((product) => product.id === id);
        setItem(producto);

    }, [id]);

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
                    sx={{
                        width: "90%",
                        maxWidth: "1200px",
                        mx: "auto",
                        flexWrap: "nowrap",
                    }}
                >

                    <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: "bold",
                                color: "#2C0E14",
                                mb: 2,
                                fontSize: { xs: "2.5rem", md: "4rem" },
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#DF7216",
                                mb: 3,
                            }}
                        >
                            {item.description}
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                color: "#2C0E14",
                                fontSize: { xs: "1rem", md: "2rem" },
                                mt: 2,
                                letterSpacing: 1,
                            }}
                        >
                            ${item.price}
                        </Typography>
                        <Counter item={item} />
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={item.imageUrl}
                            alt={item.title}
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
