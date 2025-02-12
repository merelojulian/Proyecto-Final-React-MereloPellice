import { useState, useEffect } from "react";
import { products } from "../../../products";
import ProductCard from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";

const ItemListContainer = () => {
    const { categoryName } = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        let arrayFiltrado = products.filter((elemento) => elemento.category === categoryName);

        const getProducts = new Promise((resolve, reject) => {
            let permiso = true;
            if (permiso) {
                resolve(categoryName ? arrayFiltrado : products);
            } else {
                reject({ status: 400, message: "algo salió mal" });
            }
        });

        getProducts
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);


    const obtenerTitulo = () => {
        switch (categoryName) {
            case "carne":
                return "Hamburguesas de Carne";
            case "pollo":
                return "Hamburguesas de Pollo";
            case "veggies":
                return "Hamburguesas Vegetarianas";
            default:
                return "Nuestras Hamburguesas";
        }
    };

    return (
        <Box className="products">
            <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", color: "#2C0E14", mb: 4, fontSize: { xs: "2rem", md: "3rem" }, }}>
                {obtenerTitulo()}
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {items.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={item.id}>
                        <ProductCard {...item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ItemListContainer;
